import Layout from "@components/Layout";
import PostCard from "@components/PostCard";
import { posts } from "../../data";
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
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Layout>
    </div>
  );
}

export default SavedPostsPages;
