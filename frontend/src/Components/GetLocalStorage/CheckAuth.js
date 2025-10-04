// CheckAuth.js
export const BookStorage = {
    getEmail: () => localStorage.getItem('BookEmail_Ref'),
    getIsUserLogin: () => localStorage.getItem('BookIsUserLogin_Ref'),
    getToken: () => localStorage.getItem('BookUserToken_Ref'),
};
