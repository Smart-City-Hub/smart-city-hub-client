import Card from "./Card";
import Avatar from "./Avatar";
import { posts } from "../data";
import StatsPost from "./StatsPost";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import PostPage from "../scenes/postPage";
import Modal from "./Modal";
import { postService } from "../services";

function PostCard({ post, username }) {
  const [isModalOpen, setIsModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()
  const [liked, setLiked] = useState(false)
  // console.log(post.likes, username, post.likes.indexOf(username), liked)
  const toggleLikedPost = async () => {
    try {
      const response = await postService.toggleLikedPost(post._id)
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
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      />
                    </svg>
                    Save post
                  </a>
                </li>
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
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                      />
                    </svg>
                    Turn notifications
                  </a>
                </li>
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
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      />
                    </svg>
                    Share
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
            <li onClick={() => {
                toggleLikedPost()
                setLiked(prev => !prev)
              }}>
              <div>
                <svg className="w-6 h-6 like_post" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-liked={liked} fill={liked ? "red": ""}><path d={liked ? "M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z": "M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z"}/></svg>
                Likes
                <span className="badge badge-sm">{post.likes.length}</span>
              </div>
            </li>
            {/* <Link to={`/post/${post._id}`}> */}
              <li onClick={() => {
                  setSearchParams({
                    id: `${post._id}`
                  })
                  openModal()
                  }
                }>
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
            {/* </Link> */}
            {isModalOpen && <Modal post={post} closeModal={closeModal} />}
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default PostCard;
