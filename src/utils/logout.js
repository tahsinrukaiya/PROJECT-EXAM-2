export const logout = (setAuthData) => {
    localStorage.removeItem('authData');
    localStorage.removeItem('accessToken');
    setAuthData(null);
    console.log("User logged out.");
};


