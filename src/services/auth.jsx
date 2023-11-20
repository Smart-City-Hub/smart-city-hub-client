import HttpRequest from "./api";

const login = async (request) => {
    return await HttpRequest("none").post('/api/users/login', request)
}

const register = async (request) => {
    return await HttpRequest("none").post('/api/users/register', request, {
        headers: {
            'Content-Type': 'multipart/formdata'
        }
    })
}

const getUserProfile = async (token) => {
    return await HttpRequest(token).get('/api/users', {
        withCredentials: true,
    })
}

export { login, register, getUserProfile }