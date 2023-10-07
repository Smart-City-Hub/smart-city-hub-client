import React from "react";

function Card({ children, noPadding }) {
  let classes = "card card-compact bg-base-100 shadow-xl mb-5 rounded-md ";
  if (!noPadding) {
    classes += " p-4";
  }
  return <div className={classes}>{children}</div>;
}

export default Card;
