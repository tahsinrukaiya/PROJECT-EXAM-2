export const logout = (setAuthData) => {
    localStorage.removeItem('authData');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('venues');
    setAuthData(null);
    console.log("User logged out.");
};


