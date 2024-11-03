import React, { createContext, useContext, useState } from "react";
import { registerUser } from "./authAPI";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authData, setAuthData] = useState(null);

    const handleRegister = async (userData) => {
        try {
            const response = await registerUser(userData);
            setAuthData(response.data); // Save the registered user's data in state'
            console.log(response.data);
            return response;
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ authData, handleRegister }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

