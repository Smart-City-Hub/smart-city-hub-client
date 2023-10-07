import React, { useEffect, useState } from "react";
import Avatar from "@components/Avatar";
import PostCard from "@components/PostCard";
import Layout from "@components/Layout";
import Card from "@components/Card";

function PostFormPage() {
  const [user, setUser] = useState();
  const [content, setContent] = useState("");
  useEffect(() => {
    //Grap Profile user pic
    // alert(`Hello ${user}`);
  });
  return (
    <div>
      <Layout>
        <Card>
          <div className="flex gap-3">
            <Avatar url={""} />
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Title idea</span>
              </label>
              <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs mb-3"
              />
              <label className="input-group">
                <span>Upload</span>
                <input
                  type="text"
                  placeholder="jpg/png"
                  className="input input-bordered"
                />
              </label>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Describe Your Idea</span>
                </label>
                <textarea
                  placeholder="Bio"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Upload your idea !</button>
              </div>
            </form>
          </div>
        </Card>
      </Layout>
    </div>
  );
}

export default PostFormPage;
