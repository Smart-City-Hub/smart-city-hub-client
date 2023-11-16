import React, { useEffect, useState } from "react";
import Layout from "@components/Layout";
import Card from "@components/Card";
import Avatar from "@components/Avatar";
import PostCard from "@components/PostCard";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import HttpCatImage from "../errorPage/HttpCatImage";
import FriendInfo from "@components/FriendInfo";
import FriendTotal from "@components/FriendTotal";
import AboutMe from "@components/AboutMe";
// import { posts } from "../../data";
import { postService } from "../../services";
import axios from "axios";
import MyPostCard from "@components/myPostCard";
import EditPostModal from "@components/EditPostModal";
import { useModal } from "../../hooks";
// import { controller } from "../../services/api";
import Alert from "@components/Alert";
import { profileStore } from "../../store/profile";


function ProfilPage() {
  const { pathname } = useLocation();
  const isPosts = pathname.includes("posts") || pathname === "/profile";
  const isAbout = pathname.includes("about");
  const isFriends = pathname.includes("friends");
  const [editModalShow, setEditModalShow] = useModal()
  const [alertShow, setAlertShow] = useModal()
  const profile = profileStore(state => state.profile)

  const [post, setPost] = useState([])

  const getPostPostedByUser = async (signal) => {
    try {
      const response = await postService.getPostPostedByUser(signal)
      setPost(response.data.data)
      // console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const deletePost = async (id) => {
    try {
        const response = await postService.deletePost(id)
        // console.log(response)
        setPost(prev => {
          return prev.filter(item => item._id !== id )
        })
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getPostPostedByUser(signal)
    return () => {
      controller.abort()
    }
  }, [alertShow])

  return (
    <div>
      <Layout>
        <Card>
          <div className="relative overflow-hidden rounded-md">
            <figure>
              <div className="h-36 overflow-hidden flex justify-center items-center">
                <img
                  src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="background image"
                />
              </div>
            </figure>
            <div className="card-body h-auto">
              <div className="flex gap-5">
                <Avatar size={"lg"} />
                <div>
                  <h2 className="card-title text-3xl font-bold">{profile.username}</h2>
                  <p>Sleman, Yogyakarta</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="tabs tabs-boxed">
          <Link
            to="/profile/posts"
            className={(isPosts ? "tab-active " : "") + "tab"}
          >
            Posts
          </Link>
          <Link
            to="/profile/friends"
            className={(isFriends ? "tab-active " : "") + "tab"}
          >
            Friends
          </Link>
          <Link
            to="/profile/about"
            className={(isAbout ? "tab-active " : "") + "tab"}
          >
            About
          </Link>
        </div>
        {isPosts && (
          <div>
            {post.map((post) => (
              <MyPostCard post={post} deletePost={deletePost} key={post._id} toggleEditModal={setEditModalShow} username={profile.username}/>
            ))}
          </div>
        )}
        {
          isPosts && post.length === 0 ?
          (
          <h1 className="text-lg font-bold text-center text-slate-600 mt-24">You dont have a post yet</h1>
          ) : <></>
        }
        {isFriends && (
          <Card>
            <FriendTotal />
            <FriendInfo />
          </Card>
        )}
        {isAbout && (
          <div>
            <AboutMe />
          </div>
        )}
      </Layout>
      {
        editModalShow ? <EditPostModal toggleEditModal={setEditModalShow} toggleAlert={setAlertShow}/>: <></>
      }
      {
        alertShow ? <Alert toggle={setAlertShow} message={"Post updated"} type={"success"}/>: <></>
      }
    </div>
  );
}

export default ProfilPage;
