import { posts } from "../../data";
import React from "react";

function PostPage({ post }) {
  return (
    <div>
      <div className="modal-box">
        <div className="card lg:card-side bg-base-100 ">
          <figure>
            <img  alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">tes</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </div>
  );
}

export default PostPage;
