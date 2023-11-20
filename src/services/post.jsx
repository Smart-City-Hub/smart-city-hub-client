import HttpRequest from "./api";

const createPost = async (request, token) => {
    return await HttpRequest(token).post('/api/post', 
        request, {
        withCredentials: true,
        headers: {
            'Content-Type': 'multipart/formdata'
        }
    })
}

const getPostPostedByUser = async (signal, token) => {
    return await HttpRequest(token).get('api/post', {
        signal: signal,
    })
}

const deletePost = async (id, token) => {
    return await HttpRequest(token).delete(`api/post/${id}`)
}

const getPostById = async (id, signal, token) => {
    return await HttpRequest(token).get(`api/post/${id}`, {
        signal: signal,
    })
}

const updatePost = async (request, token) => {
    return await HttpRequest(token).put(`api/post`, request)
}

const searchPost = async (request, token) => {
    return await HttpRequest(token).get(`api/post/search${request}`)
}

const toggleLikedPost = async (post_id, token) => {
    return await HttpRequest(token).post(`api/post/${post_id}/like`)
}

const createComment = async (post_id, request, token) => {
    return await HttpRequest(token).post(`api/post/${post_id}/comments`, request)
}

const getComment = async (post_id, token) => {
    return await HttpRequest(token).get(`api/post/${post_id}/comments`)
}

export { createPost, getPostPostedByUser, deletePost, getPostById, updatePost, searchPost, toggleLikedPost, createComment, getComment }