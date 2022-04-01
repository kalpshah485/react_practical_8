export const registerUser = (user) => {
    localStorage.setItem("userData", JSON.stringify(user));
    return {
        type: 'REGISTER_USER',
        payload: user
    }
}
export const logout = () => {
    localStorage.removeItem("userData");
    return {
        type: 'LOGOUT'
    }
}