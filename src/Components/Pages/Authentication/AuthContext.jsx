import React, { createContext, useContext, useState } from "react";
import { registerUser, loginUser } from "./authAPI";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authData, setAuthData] = useState(null);

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
            return response;
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ authData, handleRegister, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
