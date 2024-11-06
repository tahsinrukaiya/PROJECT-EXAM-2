export const saveUserData = (userData) => {
    localStorage.setItem('authData', JSON.stringify(userData));
    if (userData.accessToken) {
        localStorage.setItem('accessToken', userData.accessToken);
    }
};

// Load auth data from localStorage
export const loadAuthData = () => {
    const storedUserData = localStorage.getItem('authData');
    return storedUserData ? JSON.parse(storedUserData) : null;
};

