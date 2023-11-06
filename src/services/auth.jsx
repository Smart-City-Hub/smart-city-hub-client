import HttpRequest from "./api";

const login = async (request) => {
    return await HttpRequest.post('/api/users/login', request)
}

const register = async (request) => {
    return await HttpRequest.post('/api/users/register', request)
}

const getUserProfile = async () => {
    return await HttpRequest.get('/api/users')
}

export { login, register, getUserProfile }