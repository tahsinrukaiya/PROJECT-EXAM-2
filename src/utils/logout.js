// src/utils/logout.js
export const logout = (setAuthData) => {
    // Clear local storage
    localStorage.removeItem('authData');
    localStorage.removeItem('accessToken');

    // Clear auth state
    setAuthData(null);
    console.log("User logged out.");
};


