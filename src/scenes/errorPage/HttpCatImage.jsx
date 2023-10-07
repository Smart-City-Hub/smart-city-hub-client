import React from "react";

function HttpCatImage({ statusCode }) {
  const imageUrl = `https://http.cat/${statusCode}`;

  return (
    <div className="flex justify-center items-center h-screen">
      <img src={imageUrl} alt={`HTTP Cat ${statusCode}`} />
    </div>
  );
}

export default HttpCatImage;
