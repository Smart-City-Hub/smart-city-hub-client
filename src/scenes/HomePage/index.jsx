import NavigationCard from "../../components/NavigationCard";
import Card from "../../components/Card";
import React from "react";
import PostCard from "../../components/PostCard";
import Navbar from "../navbar/index";
import Layout from "@components/Layout";
import { posts } from "../../data";
import { useContext, useEffect, useState } from "react";
import { profileStore } from "../../store/profile";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const profile = profileStore(state => state.profile)

  useEffect(() => {
    fetch("http://localhost:3000/api/post/all").then((response) => {
      response.json().then((posts) => {
        setPosts(posts.data);
      });
    });
  }, []);

  return (
    <div>
      <Layout>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} username={profile.username}/>
        ))}
      </Layout>
    </div>
  );
};

export default HomePage;
