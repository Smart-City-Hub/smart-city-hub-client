import React from "react";
import { profileStore } from "../store/profile";

function Avatar({ size, url }) {
  let width = "w-10";
  if (size === "lg") {
    width = "w-24";
  }
  let avatarClass = `${width} rounded-full`;
  const profile = profileStore(state => state.profile)
  return (
    <div>
      <div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className={avatarClass}>
            <img
              src={`http://localhost:3000/${profile.photo}`}
              alt="foto profil"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default Avatar;
