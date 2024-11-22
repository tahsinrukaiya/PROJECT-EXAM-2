import React, { createContext, useContext, useState } from "react";
import { registerUser } from "@api/auth";
import { saveUserData } from "../../../utils/storage";
import { logout } from "../../../utils/logout";
import { API_URLS } from "../../../config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authData, setAuthData] = useState(() => {
        try {
            const storedData = localStorage.getItem('authData');
            return storedData ? JSON.parse(storedData) : null;
        } catch (error) {
            console.error("Error parsing authData from localStorage:", error);
            localStorage.removeItem('authData');
            return null;
        }
    });

    const navigate = useNavigate();

    const handleRegister = async (userData) => {
        try {
            const response = await registerUser(userData);
            setAuthData(response.data);
            console.log(response.data);
            if (response.data.venueManager) {
                console.log("User is registered as a venue manager.");
            } else {
                console.log("User is registered as a customer.");
            }
            saveUserData(response.data);
            return response;
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    };

    const handleLogin = async ({ email, password, venueManager }) => {
        try {
            const loginUrl = `${API_URLS.LOGIN}?_holidaze=true`;
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error(`Login failed with status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API Response Data:", data);

            if (!data || !data.data || !data.data.accessToken) {
                throw new Error("Missing accessToken in response data");
            }

            setAuthData(data.data);
            console.log("Logged in successfully:", data.data);
            saveUserData(data.data);
            return data.data;
        } catch (error) {
            console.error("Login failed:", error.message);
            throw error;
        }
    };

    const handleLogout = () => {
        logout(setAuthData);
        localStorage.removeItem('authData');
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ authData, handleRegister, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
