import HttpRequest from "./api";

const createPost = async (request) => {
    return await HttpRequest.post('/api/post', 
        request, {
        withCredentials: true
    })
}

const getPostPostedByUser = async (signal) => {
    return await HttpRequest.get('api/post', {
        signal: signal
    })
}

export { createPost, getPostPostedByUser }