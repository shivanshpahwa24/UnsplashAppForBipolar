import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow navbar-light sticky-top"
      style={{
        background: "white",
      }}
    >
      <div className="container-fluid d-sm-flex align-items-center mx-0 p-1 justify-content-between">
        <div>
          <RouterLink to="/">
            <i
              style={{ color: "black", fontSize: "1.8rem" }}
              className="fas fa-camera"
            ></i>
          </RouterLink>
        </div>
        <div className="d-flex">
          <div
            className="collapse navbar-collapse font-weight-bold"
            id="navbarNavAltMarkup"
          >
            <RouterLink
              className="nav-item nav-link nav-links"
              activeClassName="activeLink"
              to="/"
              style={{ cursor: "pointer" }}
            >
              Home
            </RouterLink>

            <RouterLink
              className="nav-item nav-link nav-links"
              activeClassName="activeLink"
              to="/collections"
              style={{ cursor: "pointer" }}
            >
              Collections
            </RouterLink>

            <RouterLink
              className="nav-item nav-link nav-links"
              activeClassName="activeLink"
              to="/explore"
              style={{ cursor: "pointer" }}
            >
              Explore
            </RouterLink>
            <RouterLink
              className="nav-item nav-link nav-links"
              activeClassName="activeLink"
              to="/more"
              style={{ cursor: "pointer" }}
            >
              ...
            </RouterLink>
          </div>
          <div className="collapse navbar-collapse">
            <button
              className="btn nav-links"
              style={{ border: "1px solid #c7c7c7" }}
            >
              Submit a photo
            </button>
            <i
              style={{ color: "#838383", fontSize: "1.5rem" }}
              className="fas fa-bell ml-4 mr-2"
            ></i>
            <i
              style={{ color: "#838383", fontSize: "1.8rem" }}
              className="fas fa-user-circle mx-sm-2"
            ></i>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
