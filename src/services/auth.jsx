import HttpRequest from "./api";

const login = async (request) => {
    return await HttpRequest.post('/api/users/login', request)
}

export { login }