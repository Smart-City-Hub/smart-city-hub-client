import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { posts } from "../data";
import { useLocation, useSearchParams } from "react-router-dom";
import { postService } from "../services";
import ChatBubble from "./ChatBubble";
import { profileStore } from "../store/profile";
import { useComments } from "../hooks";
import Cookies from "js-cookie";

function Modal({ post ,closeModal}) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [postData, setPostData] = useState({
    title: "",
    imageUrl: "",
    content: ""
  })
  const [comment, setComment] = useState(post.comments)
  const [comments, setToggleFetch] = useComments(post._id)
  console.log(comments, 'baru')

  const [commentText, setCommentText] = useState("")
  const profile = profileStore(state => state.profile)
  const removeQueryParams = () => {
    if (searchParams.has('id')){
      searchParams.delete('id')
      setSearchParams(searchParams)
    }
  }
  const getPostDetail = async (id, signal) => {
    try {
        const token = Cookies.get('token')
        const response = await postService.getPostById(id, signal, token)
        // console.log(response)
        setPostData({
            title: `${response.data.data.title}`,
            imageUrl: `http://localhost:3000/${response.data.data.cover}`,
            content: `${response.data.data.content}`
        })
    } catch (error) {
        // console.log(error)
    }
  }

  // console.log(post.comments)

  const createComment = async (id, data) => {
    try {
      const token = Cookies.get('token')
      const response = await postService.createComment(id, {
        text:data
      }, token)
      setToggleFetch(prev => !prev)
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
          <div>
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
                <input type="text" placeholder="Add a comment..." className="input input-bordered w-full" onChange={(e) => setCommentText(e.target.value)}/>
                </div>
                <button className="btn btn-outline btn-success" onClick={() => createComment(searchParams.get('id'), commentText)}>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="h-full">
          <h1 className="text-lg font-bold text-start text-slate-600">Comments</h1>
            {
              comments.map(data => <ChatBubble comment={data}/>)
            }
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
