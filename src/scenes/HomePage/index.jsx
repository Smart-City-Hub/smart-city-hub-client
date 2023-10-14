import NavigationCard from "../../components/NavigationCard";
import Card from "../../components/Card";
import React from "react";
import PostCard from "../../components/PostCard";
import Navbar from "../navbar/index";
import Layout from "@components/Layout";
import { posts } from "../../data";

const HomePage = () => {
  return (
    <div>
      <Layout>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </Layout>
    </div>
  );
};

export default HomePage;
