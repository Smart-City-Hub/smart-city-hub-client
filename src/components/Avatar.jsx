import React from "react";

function Avatar({ size }) {
  let width = "w-10";
  if (size === "lg") {
    width = "w-24";
  }
  let avatarClass = `${width} rounded-full`;
  return (
    <div>
      <div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className={avatarClass}>
            <img
              src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80"
              alt="foto profil"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default Avatar;
