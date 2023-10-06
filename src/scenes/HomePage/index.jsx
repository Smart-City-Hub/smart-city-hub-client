import NavigationCard from "../components/NavigationCard";
import Card from "../components/Card";
import React from "react";
import PostCard from "../components/PostCard";
import Navbar from "../navbar/index";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex mt-4 max-w-4xl mx-auto gap-6 ">
        <div className="w-1/4">
          <NavigationCard />
        </div>
        <div className="w-3/4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </>
  );
};

export default HomePage;
