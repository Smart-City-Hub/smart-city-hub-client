import Avatar from "@components/Avatar";
import { UserContext } from "../../context/userContext";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("smartcityhub");
    setUserInfo(null);
    navigate("/login", { replace: true });
  };

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
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
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
