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

const deletePost = async (id) => {
    return await HttpRequest.delete(`api/post/${id}`)
}

const getPostById = async (id, signal) => {
    return await HttpRequest.get(`api/post/${id}`, {
        signal: signal
    })
}

const updatePost = async (request) => {
    return await HttpRequest.put(`api/post`, request)
}

const searchPost = async (request) => {
    return await HttpRequest.get(`api/post/search${request}`)
}

const toggleLikedPost = async (post_id) => {
    return await HttpRequest.post(`api/post/${post_id}/like`)
}

const createComment = async (post_id, request) => {
    return await HttpRequest.post(`api/post/${post_id}/comments`, request)
}

const getComment = async (post_id) => {
    return await HttpRequest.get(`api/post/${post_id}/comments`)
}

export { createPost, getPostPostedByUser, deletePost, getPostById, updatePost, searchPost, toggleLikedPost, createComment, getComment }