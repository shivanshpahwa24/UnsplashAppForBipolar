import React from "react";
import BG from "../assets/background/bg.jpg";
const Header = () => {
  return (
    <header
      className="text-white p-5"
      style={{
        minHeight: "500px",
        backgroundImage: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container header">
        <h1 className="text-left my-3">Unsplash</h1>
        <div style={{ opacity: "0.8" }}>Beautiful, free photos.</div>
        <div style={{ opacity: "0.8" }}>
          Gifted by the world's most generous community of photographers.
        </div>
        <div className="d-flex my-4 input-box-container">
          <i className="fas fa-search"></i>
          <input
            type="text"
            className="form-control"
            placeholder="Search free high-resolution photos"
          />
          <button className="btn text-black-50">Search</button>
        </div>

        <div style={{ fontSize: "0.9rem" }}>
          <span className="text-muted">Trending searches:</span>{" "}
          <span style={{ opacity: "0.8" }}>
            business, computer, nature, love, house
          </span>
        </div>
      </div>
    </header>
  );
};
export default Header;
