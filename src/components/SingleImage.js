import React from "react";

const SingleImage = ({ url, id }) => {
  return (
    <div className="single-image d-flex justify-content-center align-items-center">
      <img src={url} alt={id} />
    </div>
  );
};
export default SingleImage;
