import Avatar from "@components/Avatar";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ user }) => {
  const { pathname } = useLocation();

  function logout() {}
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <Link to="/"> Smart City Hub</Link>
          </a>
        </div>
        {user ? (
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <Avatar />
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <Link to="/profile/posts/:id">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                </Link>
                <li>
                  <a>Settings</a>
                </li>
                <Link to="/login">
                  <li>
                    <a>Logout</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
