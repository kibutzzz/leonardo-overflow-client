export const AUTH_KEY = "@leonardo-overflow-key";
export const isAuthenticated = () => localStorage.getItem(AUTH_KEY) !== null;
export const getAuthentication = () => JSON.parse(localStorage.getItem(AUTH_KEY));
export const login = authorization => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(authorization));
}
export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
}