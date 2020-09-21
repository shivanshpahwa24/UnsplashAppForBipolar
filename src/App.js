import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ImageContainer from "./components/ImageContainer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <BrowserRouter>
        <Navbar />
        <Header />
        <ImageContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
