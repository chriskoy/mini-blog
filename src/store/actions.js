export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
 
export const loginSuccess = (user) => ({ type: LOGIN, payload: user });
export const logoutSuccess = () => ({ type: LOGOUT });