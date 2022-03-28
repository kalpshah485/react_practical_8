export const registerUser = (user) => {
    return {
        type: 'REGISTER_USER',
        payload: user
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}