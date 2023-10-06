import React from "react";
import Avatar from "/src/scenes/components/Avatar";

function PostFormPage() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Title Inovate!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <div className="flex gap-3">
                <Avatar />
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Iklim Cuaca</div>
                <div className="badge badge-outline">Technology</div>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="flex gap-2">
              <Avatar />
              <h1 className="text-center text-5xl font-bold">Inovate now!</h1>
            </div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />{" "}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-alt">Your Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="What would you like to"
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tag</span>
                </label>
                <input
                  type="tag"
                  placeholder="tag"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostFormPage;
