import React, { useState, useEffect } from "react";
import SingleImage from "./SingleImage";
import { v4 as uuid } from "uuid";

const ImageContainer = ({ images }) => {
  const [option, setOption] = useState("1");

  const tabDecider = () => {
    if (option === "1") {
      document.getElementById("trending").style.color = "black";
      document.getElementById("new").style.color = " #838383";
      document.getElementById("following").style.color = " #838383";
    }
    if (option === "2") {
      document.getElementById("trending").style.color = " #838383";
      document.getElementById("new").style.color = "black";
      document.getElementById("following").style.color = " #838383";
    }
    if (option === "3") {
      document.getElementById("trending").style.color = " #838383";
      document.getElementById("new").style.color = " #838383";
      document.getElementById("following").style.color = "black";
    }
  };
  useEffect(() => {
    tabDecider();
  }, [option]);

  return (
    <div className="p-3">
      <div className="my-2">
        <button
          onClick={() => {
            setOption("1");
          }}
          id="trending"
          className="btn nav-links"
          style={{ fontSize: "1rem", fontWeight: "600" }}
        >
          Trending
        </button>
        <button
          onClick={() => {
            setOption("2");
          }}
          id="new"
          className="btn nav-links"
          style={{ fontSize: "1rem", fontWeight: "600" }}
        >
          New
        </button>
        <button
          onClick={() => {
            setOption("3");
          }}
          id="following"
          className="btn nav-links"
          style={{ fontSize: "1rem", fontWeight: "600" }}
        >
          Following
        </button>
      </div>
      <div className="image-container mx-2">
        {images.map((image) => (
          <SingleImage url={image.urls.small} key={uuid()} id={image.id} />
        ))}
      </div>
    </div>
  );
};
export default ImageContainer;
