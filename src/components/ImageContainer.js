import React, { useState, useEffect } from "react";
import SingleImage from "./SingleImage";
import { v4 as uuid } from "uuid";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const ImageContainer = () => {
  const [image1, setImage1] = useState([]);
  const [image2, setImage2] = useState([]);

  const fetchImages = async (choice = "1580860") => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    try {
      const response = await fetch(
        `${apiRoot}/collections/${choice}/photos?client_id=${accessKey}`
      );
      const data = await response.json();
      if (choice === "1580860") {
        setImage1([...image1, ...data]);
      }
      if (choice === "139386") {
        setImage2([...image2, ...data]);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const [option, setOption] = useState("1");

  const tabDecider = () => {
    if (option === "1") {
      document.getElementById("trending").style.color = "black";
      document.getElementById("new").style.color = " #838383";
      fetchImages("1580860");
    }
    if (option === "2") {
      document.getElementById("trending").style.color = " #838383";
      document.getElementById("new").style.color = "black";
      fetchImages("139386");
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
      </div>

      {option === "1" && (
        <InfiniteScroll
          dataLength={image1.length}
          next={() => fetchImages("1580860")}
          hasMore={true}
          loader={<Loader />}
        >
          <div className="image-container mx-2">
            {image1.map((image) => (
              <SingleImage url={image.urls.small} key={uuid()} id={image.id} />
            ))}
          </div>
        </InfiniteScroll>
      )}

      {option === "2" && (
        <InfiniteScroll
          dataLength={image2.length}
          next={() => fetchImages("139386")}
          hasMore={true}
          loader={<Loader />}
        >
          <div className="image-container mx-2">
            {image2.map((image) => (
              <SingleImage url={image.urls.small} key={uuid()} id={image.id} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};
export default ImageContainer;
