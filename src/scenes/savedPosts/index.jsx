import Layout from "@components/Layout";
import PostCard from "@components/PostCard";
import React from "react";

function SavedPostsPages() {
  return (
    <div>
      <Layout>
        <div>
          <h1 className=" text-center text-5xl mb-4 font-bold">
            Your saved posts
          </h1>
        </div>
        <div className="mb-4 divider"></div>
        <PostCard />
        <PostCard />
        <PostCard />
      </Layout>
    </div>
  );
}

export default SavedPostsPages;
