import Card from "./Card";
import Avatar from "./Avatar";
import { posts } from "../data";
import StatsPost from "./StatsPost";
import { Link, useLocation, useSearchParams } from "react-router-dom";
// import { createBrowserHistory } from "history";
import { UserContext } from "../context/userContext";
import { useEffect, useState } from "react";
import { postService } from "../services";

function MyPostCard({ post, deletePost, toggleEditModal }) {
    // const history = createBrowserHistory();
    const [searchParams, setSearchParams] = useSearchParams()

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
                        {/* {authorProfile.name} */} Someone
                    </span>
                    </Link>
                    shared a post
                </p>
                <p className="text-gray-500 text-sm">2 hours ago</p>
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
                <img src={"http://localhost:3000/" + post.cover} alt="Shoes" />
            </figure>
            <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
                <li>
                <a>
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
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                    </svg>
                    Likes
                    <span className="badge badge-sm">99+</span>
                </a>
                </li>
                <Link to={`/post/${post.id}`}>
                <li>
                    <a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    Comments
                    <span className="badge badge-sm badge-warning">NEW</span>
                    </a>
                </li>
                </Link>
            </ul>
            </div>
        </Card>
        </div>
    );
}

export default MyPostCard;
