export const saveUserData = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
    if (userData.accessToken) {
        localStorage.setItem('accessToken', userData.accessToken);
    }
};

// Load auth data from localStorage
export const loadUserData = () => {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
};

