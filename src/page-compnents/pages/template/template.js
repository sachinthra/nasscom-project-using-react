import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function Template() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <br /> <h1>Page Not Found</h1>
        </p>
        <div
          style={{
            border: "3px solid rgb(129, 125, 125)",
            padding: "10px",
            margin: "10px",
            backgroundColor: "lightblue",
            borderRadius: "45%",
          }}
        >
          <Link to="/logintemplate">
            <span style={{ color: "black", textUnderlineOffset: "none" }}>
              Click here To Login
            </span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Template;
