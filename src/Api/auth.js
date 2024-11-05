import { API_URLS } from "../config";
console.log(API_URLS.REGISTER);
console.log(API_URLS.LOGIN);

export async function registerUser(userData) {
    const response = await fetch(`${API_URLS.REGISTER}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Registration error details:", errorMessage);
        throw new Error("Failed to register user: " + errorMessage);
    }
    return response.json();
}

// authAPI.js
export const loginUser = async (email, password) => {
    const response = await fetch(`${API_URLS.LOGIN}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
    }
    return await response.json();
};
