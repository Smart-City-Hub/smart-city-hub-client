import Card from "./Card";
import Avatar from "./Avatar";
import { posts } from "../data";
import StatsPost from "./StatsPost";
import { Link, useLocation, useSearchParams } from "react-router-dom";
// import { createBrowserHistory } from "history";
import { UserContext } from "../context/userContext";
import { useEffect, useState } from "react";
import { postService } from "../services";
import dayjs from "dayjs";
import Modal from "@components/Modal";

function MyPostCard({ post, deletePost, toggleEditModal, username }) {
    // const history = createBrowserHistory();
    const [isModalOpen, setIsModal] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()
    const modifiedDate = dayjs(post.createdAt)
    const [liked, setLiked] = useState(false)
    const [arrLike, setArrLike] = useState(post.likes)

    const toggleLikedPost = async () => {
        try {
          const token = localStorage.getItem("token")
          const response = await postService.toggleLikedPost(post._id, token)
          // console.log(response)
        } catch (error) {
          console.log(error)
        }
      }
      const openModal = () => {
        setIsModal(true);
      };
    
      const closeModal = () => {
        setIsModal(false);
      };
      useEffect(() => {
        const modalElement = document.getElementById("my_modal_2");
        // console.log(profile.username)
        if(post.likes.indexOf(username) !== -1) {
          setLiked(true)
        }
        // setLikeAsync()
        if (modalElement) {
          modalElement.showModal();
        }
    
      }, [isModalOpen, username]);
    return (
        <div>
        <Card>
            <div className="card-body">
            <div className="flex gap-3">
                <div>
                <Link to="/profile/posts/:id">
                    <Avatar />
                </Link>
                </div>
                <div className="grow">
                <p>
                    {/* seharusnya ini link ke profile page dari owner post */}
                    <Link href={"/profile/posts/:id"}> 
                    <span className="mr-1 font-semibold cursor-pointer hover:underline">
                        {/* {authorProfile.name} */} {post.author}
                    </span>
                    </Link>
                    shared a post
                </p>
                <p className="text-gray-500 text-sm">{modifiedDate.format("MMM D, YYYY h:mm A")}</p>
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn m-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li onClick={() => {
                            toggleEditModal();
                            setSearchParams({
                                id: `${post._id}`
                            })
                            }
                        }>
                    <a>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-6 h-6"
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="#000000" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round">
                            <polygon 
                                points="16 3 21 8 8 21 3 21 3 16 16 3">
                            </polygon>
                        </svg>
                        Edit post
                    </a>
                    </li>
                    <li onClick={() => deletePost(post._id)}>
                    <a>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-6 h-6" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="#e14556" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round">
                            <polyline 
                                points="3 6 5 6 21 6">
                            </polyline>
                            <path 
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                            </path>
                            <line 
                                x1="10" y1="11" x2="10" y2="17">
                            </line>
                            <line 
                                x1="14" y1="11" x2="14" y2="17">
                            </line>
                            </svg>
                            Delete Post
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            <div>
                <div tabIndex={0} className="collapse">
                <div className="collapse-title text-xl font-medium">
                    {post.title}
                </div>
                <div className="collapse-content">{post.content}</div>
                </div>
            </div>
            <figure className="rounded-md overflow-hidden">
                <img src={`${import.meta.env.VITE_BASEURL}/` + post.cover} alt="Shoes" />
            </figure>
            <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
                <li onClick={() => {
                    toggleLikedPost()
                    setLiked(prev => !prev)
                    if(liked) {
                    // console.log('masuk', arrLike)
                    setArrLike(prev => prev.filter(data => data != username))
                    } else {
                    setArrLike(prev => [...prev, username])
                    }
                }}>
                <div>
                    <svg className="w-6 h-6 like_post" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-liked={liked} fill={liked ? "red": ""}><path d={liked ? "M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z": "M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z"}/></svg>
                    Likes
                    <span className="badge badge-sm">{arrLike.length}</span>
                </div>
                </li>
                <li onClick={() => {
                    if (searchParams.get('key')) {
                        setSearchParams({
                        id: `${post._id}`,
                        key: `${searchParams.get('key')}`
                        })
                    } else {
                        setSearchParams({
                        id: `${post._id}`
                        })
                    }
                    openModal()
                    }
                    }>
                    <a>
                    <svg className="h-6 w-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#FEE187;" d="M33.916,319.99c-12.288-23.529-19.245-50.282-19.245-78.663c0-93.988,76.192-170.18,170.18-170.18 s170.18,76.192,170.18,170.18s-76.192,170.18-170.18,170.18c-35.145,0-67.799-10.655-94.914-28.909l-73.848,16.616L33.916,319.99z"></path> <g> <path fill="#FFC61B;" d="M184.851,426.178c-34.774,0-68.418-9.631-97.713-27.912L19.31,413.527 c-4.909,1.1-10.038-0.383-13.595-3.939c-3.556-3.556-5.044-8.688-3.939-13.595l16.673-74.103C6.366,296.935,0,269.201,0,241.327 C0,139.4,82.923,56.476,184.851,56.476s184.851,82.923,184.851,184.851S286.778,426.178,184.851,426.178z M89.937,367.928 c2.896,0,5.752,0.857,8.194,2.501c25.663,17.276,55.65,26.407,86.72,26.407c85.749,0,155.509-69.761,155.509-155.509 S270.6,85.818,184.851,85.818S29.341,155.578,29.341,241.327c0,25.357,5.914,49.537,17.578,71.872 c1.606,3.076,2.07,6.625,1.309,10.011l-12.736,56.601l51.224-11.525C87.782,368.045,88.863,367.928,89.937,367.928z"></path> <path fill="#FFC61B;" d="M341.82,455.525c-9.917,0-19.88-0.866-29.614-2.575c-7.979-1.401-13.314-9.006-11.914-16.987 c1.4-7.981,9.008-13.314,16.987-11.914c8.063,1.416,16.32,2.133,24.541,2.133c28.138,0,55.297-8.27,78.538-23.916 c3.348-2.253,7.479-3.027,11.414-2.142l44.857,10.092l-11.198-49.77c-0.763-3.387-0.299-6.935,1.309-10.013 c10.563-20.227,15.919-42.125,15.919-65.091c0-58.45-35.172-109.96-89.606-131.229c-7.547-2.949-11.274-11.458-8.324-19.004 c2.949-7.548,11.455-11.271,19.004-8.326c31.546,12.326,58.48,33.593,77.89,61.498c19.873,28.574,30.379,62.136,30.379,97.06 c0,25.514-5.792,50.9-16.794,73.772l15.139,67.284c1.105,4.907-0.383,10.038-3.939,13.595c-3.556,3.558-8.685,5.045-13.595,3.939 l-61.476-13.832C404.471,446.754,373.66,455.525,341.82,455.525z"></path> <path fill="#FFC61B;" d="M273.854,259.905h-18.582c-8.103,0-14.671-6.568-14.671-14.671c0-8.103,6.568-14.671,14.671-14.671 h18.582c8.103,0,14.671,6.568,14.671,14.671C288.524,253.337,281.956,259.905,273.854,259.905z"></path> <path fill="#FFC61B;" d="M194.875,259.905h-18.582c-8.103,0-14.671-6.568-14.671-14.671c0-8.103,6.568-14.671,14.671-14.671 h18.582c8.103,0,14.671,6.568,14.671,14.671C209.546,253.337,202.978,259.905,194.875,259.905z"></path> <path fill="#FFC61B;" d="M115.899,259.905H97.317c-8.103,0-14.671-6.568-14.671-14.671c0-8.103,6.568-14.671,14.671-14.671 h18.582c8.103,0,14.671,6.568,14.671,14.671C130.569,253.337,124.001,259.905,115.899,259.905z"></path> </g> </g></svg>
                    Comments
                    {/* <span className="badge badge-sm badge-warning">NEW</span> */}
                    </a>
                </li>
                {isModalOpen && <Modal post={post} closeModal={closeModal} />}
            </ul>
            </div>
        </Card>
        </div>
    );
}

export default MyPostCard;
