import React from "react";
import { Redirect } from "react-router-dom";

import RenderSignupForm from "./renderSignupForm";

export default function RenderSignupPage({
  isLoggedIn,
  handleOnSubmit,
  handleInputChange,
  isLoading,
  errorMessage,
}) {
  return (
    <React.Fragment>
      {isLoggedIn ? <Redirect to="/" /> : ""}
      <img
        className="wave"
        src={require("../img/wave.png")}
        alt="nice"
        aria-hidden="true"
      />
      <div className="container">
        <div className="img">
          <img src={require("../img/bg.svg")} alt="nice" aria-hidden="true" />
        </div>
        <div className="login-content">
          <RenderSignupForm
            handleOnSubmit={handleOnSubmit}
            handleInputChange={handleInputChange}
            isLoading={isLoading}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
