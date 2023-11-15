import React, { useEffect, useState } from "react";
import { postService } from "../services";


const useComments = (post_id) => {
    const [comments, setComments] = useState([])
    const [toggleFetch, setToggleFetch] = useState(false)

    useEffect(() => {
        const getComments = async (post_id) => {
            try {
                const response = await postService.getComment(post_id)
                setComments(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        getComments(post_id)
    }, [post_id, toggleFetch])

    return [comments, setToggleFetch]
}

export default useComments;