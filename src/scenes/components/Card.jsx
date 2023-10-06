import React from "react";

function Card({ children }) {
  return (
    <div className="card bg-base-100 shadow-xl mb-4 ">
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
