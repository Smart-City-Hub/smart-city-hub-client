import HttpRequest from "./api";

const createPost = async (request, token) => {
    return await HttpRequest.post('/api/post', 
        request, {
        withCredentials: true,
        headers: {
            'Authorization': token,
            'Content-Type': 'multipart/formdata'
        }
    })
}

const getPostPostedByUser = async (signal, token) => {
    return await HttpRequest.get('api/post', {
        signal: signal,
        headers: {
            'Authorization': token
        }
    })
}

const deletePost = async (id, token) => {
    return await HttpRequest.delete(`api/post/${id}`, {
        headers: {
            'Authorization': token
        }
    })
}

const getPostById = async (id, signal, token) => {
    return await HttpRequest.get(`api/post/${id}`, {
        signal: signal,
        headers: {
            'Authorization': token
        }
    })
}

const updatePost = async (request, token) => {
    return await HttpRequest.put(`api/post`, request, {
        headers: {
            'Authorization': token
        }
    })
}

const searchPost = async (request, token) => {
    return await HttpRequest.get(`api/post/search${request}`, {
        headers: {
            'Authorization': token
        }
    })
}

const toggleLikedPost = async (post_id, token) => {
    return await HttpRequest.post(`api/post/${post_id}/like`)
}

const createComment = async (post_id, request, token) => {
    return await HttpRequest.post(`api/post/${post_id}/comments`, request, {
        headers: {
            'Authorization': token
        }
    })
}

const getComment = async (post_id, token) => {
    return await HttpRequest.get(`api/post/${post_id}/comments` , {
        headers: {
            'Authorization': token
        }
    })
}

export { createPost, getPostPostedByUser, deletePost, getPostById, updatePost, searchPost, toggleLikedPost, createComment, getComment }