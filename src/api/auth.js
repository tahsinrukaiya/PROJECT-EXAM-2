import { API_URLS } from "../config";

export async function registerUser(userData) {
    const response = await fetch(`${API_URLS.REGISTER}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.errors?.[0]?.message || "Registration failed";
        throw new Error(errorMessage);
    }
    return response.json();
}

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
