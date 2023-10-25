import React from "react";
import Layout from "@components/Layout";
import Card from "@components/Card";
import Avatar from "@components/Avatar";
import PostCard from "@components/PostCard";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import HttpCatImage from "../errorPage/HttpCatImage";
import FriendInfo from "@components/FriendInfo";
import FriendTotal from "@components/FriendTotal";
import AboutMe from "@components/AboutMe";
import { posts } from "../../data";

function ProfilPage() {
  const { pathname } = useLocation();
  const isPosts = pathname.includes("posts") || pathname === "/profile";
  const isAbout = pathname.includes("about");
  const isFriends = pathname.includes("friends");

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
                  <h2 className="card-title text-3xl font-bold">Someone</h2>
                  <p>Sleman, Yogyakarta</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="tabs tabs-boxed">
          <Link
            to="/profile/posts/:id"
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
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        )}
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
    </div>
  );
}

export default ProfilPage;
