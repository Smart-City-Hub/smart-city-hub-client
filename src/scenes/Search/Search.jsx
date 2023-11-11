import NavigationCard from "../../components/NavigationCard";
import Card from "../../components/Card";
import React, { useEffect } from "react";
import PostCard from "../../components/PostCard";
import Navbar from "../navbar/index";
import Layout from "@components/Layout";
import { posts } from "../../data";
import { useState } from "react";
import { postService } from "../../services";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()
  
  const searchPost = async (request) => {
    try {
        const response = await postService.searchPost(request)
        setPosts(response.data.data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    const obj = '?' + new URLSearchParams({key : searchParams.get('key')}).toString()
    searchPost(obj)
  }, [searchParams.get('key')])

  return (
    <div>
      <Layout>
        <>
        <h1 className="text-lg font-bold text-start text-slate-600">{`Showed ${posts.length} results for ${searchParams.get('key')}`}</h1>
        {posts.length > 0 ? posts.map((post) => (
          <PostCard post={post} key={post._id} />
        )): <h1 className="text-lg font-bold text-center text-slate-600 mt-24">Post not found</h1>}
        </>
      </Layout>
    </div>
  );
};

export default SearchPage;
