import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Loader from "./components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageContainer from "./components/ImageContainer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    try {
      const response = await fetch(
        `${apiRoot}/collections/139386/photos?client_id=${accessKey}`
      );
      const data = await response.json();

      setImage([...images, ...data]);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="page-container">
      <BrowserRouter>
        {" "}
        <Navbar />
        <Header />
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
        >
          <ImageContainer images={images} />
        </InfiniteScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
