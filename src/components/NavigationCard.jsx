import React from "react";
import Card from "./Card";
import { Link, useParams, useLocation, NavLink } from "react-router-dom";

function NavigationCard() {
  const { pathname } = useLocation();
  const activeElementClasses =
    "text-sm md:text-md flex gap-1 md:gap-3 py-3 my-1 bg-socialBlue text-white md:-mx-7 px-6 md:px-7 rounded-md shadow-md shadow-gray-300 items-center";
  const nonActiveElementClasses =
    "text-sm md:text-md flex gap-1 md:gap-3 py-2 my-2 hover:bg-blue-500 hover:bg-opacity-20 md:-mx-4 px-6 md:px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300 items-center";
  function logout() {}
  return (
    <div>
      <Card noPadding={true}>
        <ul className="bg-base-200 rounded-lg hidden md:flex md:flex-col md:px-5 ">
          <h2 className="text-gray-400 mb-3 text-center hidden md:block">
            Navigation
          </h2>{" "}
          <NavLink
            to="/"
            className={
              // pathname === "/" ? activeElementClasses : nonActiveElementClasses
              ({isActive}) => isActive ? activeElementClasses: nonActiveElementClasses
            }
          >
            <li className="md:flex md:gap-4">
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
                Home
            </li>
          </NavLink>
          <NavLink
            to="/profile/friends"
            className={({isActive}) => isActive ? activeElementClasses: nonActiveElementClasses}
          >
            <li className="md:flex md:gap-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#000000" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">
                  </path>
                  <circle cx="9" cy="7" r="4">
                  </circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87">
                  </path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75">
                  </path>
              </svg>
                Friends
            </li>
          </NavLink>
          <NavLink
            to="/saved"
            className={({isActive}) => isActive ? activeElementClasses: nonActiveElementClasses}
          >
            <li className="md:flex md:gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 2-5" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                Saved posts
            </li>
          </NavLink>
          <NavLink
            to="/notifications"
            className={({isActive}) => isActive ? activeElementClasses: nonActiveElementClasses}
          >
            <li className="md:flex md:gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                Notifications
            </li>
          </NavLink>
          <NavLink
            onClick={logout}
            to="/posting"
            className={({isActive}) => isActive ? activeElementClasses: nonActiveElementClasses}
          >
            <li className="md:flex md:gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg>
                Post Your Idea
            </li>
          </NavLink>
        </ul>
      </Card>
    </div>
  );
}

export default NavigationCard;
