import NavigationCard from "../../components/NavigationCard";
import Card from "../../components/Card";
import React from "react";
import PostCard from "../../components/PostCard";
import Navbar from "../navbar/index";
import Layout from "@components/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Layout>
    </>
  );
};

export default HomePage;
