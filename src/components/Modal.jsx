import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { posts } from "../data";
import { useLocation, useSearchParams } from "react-router-dom";
import { postService } from "../services";

function Modal({ closeModal }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [postData, setPostData] = useState({
    title: "",
    imageUrl: "",
    content: ""
})
  const removeQueryParams = () => {
    if (searchParams.has('id')){
      searchParams.delete('id')
      setSearchParams(searchParams)
    }
  }
  const getPostDetail = async (id, signal) => {
    try {
        const response = await postService.getPostById(id, signal)
        // console.log(response)
        setPostData({
            title: `${response.data.data.title}`,
            imageUrl: `http://localhost:3000/${response.data.data.cover}`,
            content: `${response.data.data.content}`
        })
    } catch (error) {
        console.log(error)
    }
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
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <figure>
            <img className="h-52 object-cover w-full border-2 border-solid border-slate-600" src={postData.imageUrl} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{postData.title}</h2>
            <p>{postData.content}</p>
            <div className="divider"></div>
            <div className="flex gap-3">
              <Avatar />
              <div className="card-actions w-screen ">
              <input type="text" placeholder="Add a comment..." className="input input-bordered w-full" />
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => {
            closeModal()
            removeQueryParams()
            }
          } className="cursor-default">close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
