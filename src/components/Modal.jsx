import React from "react";
import Avatar from "./Avatar";
import { posts } from "../data";
import { useLocation } from "react-router-dom";

function Modal({ closeModal }) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const postss = posts.find((p) => p.id.toString() === path);

  console.log(location);
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <figure>
            <img src={postss.img} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{postss.title}</h2>
            <p>{postss.desc}</p>
            <div className="divider"></div>
            <div className="flex gap-3">
              <Avatar />
              <div className="card-actions w-screen ">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-ghost w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
