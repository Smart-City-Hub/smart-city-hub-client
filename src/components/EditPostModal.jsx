import Card from "@components/Card";
import Avatar from "@components/Avatar";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSearchParams } from "react-router-dom";
import { postService } from "../services";
import Cookies from "js-cookie";

// bisa ditambahi skeleton loading buat loading get post by idnya ya wir
const EditPostModal = ({toggleEditModal, toggleAlert}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [postData, setPostData] = useState({
        title: "",
        imageUrl: "",
        content: ""
    })
    const [fileGambar, setFileGambar] = useState(null)
    
    const getPostDetail = async (id, signal) => {
        try {
            const token = Cookies.get('token')
            const response = await postService.getPostById(id, signal, token)
            // console.log(response)
            setPostData({
                title: `${response.data.data.title}`,
                imageUrl: `${import.meta.env.VITE_BASEURL}/${response.data.data.cover}`,
                content: `${response.data.data.content}`
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updatePost = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("id", searchParams.get('id'))
            formData.append("title", postData.title)
            formData.append("content", postData.content)
            if (fileGambar != null) {
                formData.append("file", fileGambar)
            }
            const token = Cookies.get('token')
            const response = await postService.updatePost(formData, token)
            toggleEditModal()
            toggleAlert()
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeInput = (e) => {
        setPostData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const onChangeFile = (e) => {
        const { files } = e.target
        if (!files) return
        setFileGambar(files[0])
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getPostDetail(searchParams.get('id'), signal)

        return () => {
            setPostData({
                title: "",
                imageUrl: "",
                content: ""
            })
            controller.abort()
        }

    }, [searchParams.get('id')])


    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 bottom-0 right-0 z-10">
            {/* <Layout> */}
            <div className="flex justify-center items-center h-full">
                <div className="card card-compact bg-base-100 shadow-xl rounded-md p-4">
                    
                    <div className="flex gap-3">
                        <Avatar url={""} />
                        <div className="form-control w-full md:min-w-[500px] lg:min-w-[700px]">
                        <label className="label">
                            <span className="label-text">Your Title idea</span>
                        </label>
                        <input
                            defaultValue={postData.title}
                            name="title"
                            onChange={(e) => onChangeInput(e)}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full mb-3"
                        />
                        {/* <label className="input-group"> */}
                            {/* <span>Upload</span> */}
                            <div className="tooltip" data-tip="Upload a new image or leave it blank">
                                <input
                                type="file"
                                placeholder="jpg/png"
                                className="file-input file-input-bordered w-full"
                                onChange={onChangeFile}
                                />
                            </div>
                        {/* </label> */}
                        <div className="card flex-shrink-0 w-full bg-base-100">
                        <div className="">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Describe Your Idea</span>
                            </label>
                            <textarea
                                placeholder="Bio"
                                className="textarea textarea-bordered textarea-lg w-full"
                                name="content"
                                defaultValue={postData.content}
                                onChange={(e) => onChangeInput(e)}
                            ></textarea>
                            </div>

                            {/* <div className="form-control mt-6">
                                <button 
                                    className="btn btn-primary" 
                                    // onClick={createPost}
                                    >Upload your idea !</button>
                            </div> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card-actions justify-center mt-4">
                        <button className="btn btn-ghost" onClick={() => toggleEditModal()}>Dismiss</button>
                        <button className="btn btn-success" onClick={updatePost}>Save</button>
                    </div>
                </div>
            {/* </Layout> */}
            </div>
        </div>,
        document.body
    )
}

export default EditPostModal;