import React, { createContext, useContext, useState, useEffect } from "react";
import { registerUser, loginUser } from "../../../Api/auth";
import { saveUserData } from "../../../utils/storage";
import { logout } from "../../../utils/logout";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authData, setAuthData] = useState(() => {
        const storedData = localStorage.getItem('authData');
        return storedData ? JSON.parse(storedData) : null;
    });

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
            // Save data only in authData
            saveUserData(response.data);
            return response;
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    };

    const handleLogin = async ({ email, password, venueManager }) => {
        try {
            const response = await loginUser(email, password, venueManager);
            setAuthData(response.data);
            console.log("Logged in successfully:", response.data);
            // Save data only in authData
            saveUserData(response.data);
            return response;
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    const handleLogout = () => {
        logout(setAuthData);
        localStorage.removeItem('authData');
    };

    useEffect(() => {
        const storedData = localStorage.getItem('authData');
        if (storedData) {
            setAuthData(JSON.parse(storedData));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ authData, handleRegister, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
