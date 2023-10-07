import React from "react";
import Card from "./Card";

function AboutMe() {
  return (
    <div>
      <Card>
        <div className="flex justify-center items-center">
          <div className="card card-side bg-base-100 ">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Someone</h2>
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
              <div className="text-sm opacity-50">United States</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AboutMe;
