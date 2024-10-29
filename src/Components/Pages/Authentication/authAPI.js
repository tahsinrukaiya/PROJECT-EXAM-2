import axios from 'axios';

const API_URL = "https://api.example.com"; // replace with your API endpoint

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const logout = async () => {
    await axios.post(`${API_URL}/logout`);
};
