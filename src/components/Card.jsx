import React from "react";

function Card({ children, noPadding }) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl mb-4 ">
      {children}
    </div>
  );
}

export default Card;
