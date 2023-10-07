import React from "react";
import Card from "../../components/Card";
import Avatar from "../../components/Avatar";

function PostCardView() {
  return (
    <div card card-side bg-base-100 shadow-x>
      <Card>
        <div className="flex gap-3">
          <div>
            <Avatar />
          </div>
          <div>
            <p>
              <a className="font-semibold">Arkun Rifki</a> shared a{" "}
              <a className="link link-neutral">idea</a>
            </p>
            <p className="text-gray-500 text-sm">2 hours ago</p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Grean Place Center of the City!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <div className="card  bg-base-100 shadow-xl image-full">
          <figure className="rounded-md overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1661880245476-3ba5d401d7e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Open for detail</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Detail</button>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="badge">default</div>
          <div className="badge badge-neutral">neutral</div>
          <div className="badge badge-primary">primary</div>
          <div className="badge badge-secondary">secondary</div>
          <div className="badge badge-accent">accent</div>
          <div className="badge badge-ghost">ghost</div>
        </div>
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Likes
              <span className="badge badge-sm">99+</span>
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Comments
              <span className="badge badge-sm badge-warning">NEW</span>
            </a>
          </li>
          <li>
            <a>
              Stats
              <span className="badge badge-xs badge-info"></span>
            </a>
          </li>
        </ul>
      </Card>
    </div>
  );
}

export default PostCardView;
