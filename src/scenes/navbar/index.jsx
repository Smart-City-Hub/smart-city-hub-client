import Avatar from "@components/Avatar";
import { UserContext } from "../../context/userContext";
import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authService } from "../../services";
import { profileStore } from "../../store/profile";

const Navbar = ({ user }) => {
  const { userInfo ,setUserInfo } = useContext(UserContext);
  // const navigate = useNavigate()
  const navigate = useNavigate();
  // console.log(JSON.parse(userInfo))
  const profile = profileStore(state => state.profile)
  const updateProfile = profileStore(state => state.setProfile)


  const handleLogout = () => {
    localStorage.removeItem("smartcityhub");
    setUserInfo(null);
    navigate("/login", { replace: true });
  };

  const getUserProfile = async () => {
    try {
      const response = await authService.getUserProfile()
      console.log(response.data.data[0])
      updateProfile(response.data.data[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [])

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
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    const obj = e.target.value
                    const queryParams = '?' + new URLSearchParams({key: obj}).toString()
                    navigate(`/search${queryParams}`)
                  }
                }}
              />
            </div>
            <div className="dropdown dropdown-end">
              <Avatar />
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <Link to="/profile/posts">
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
