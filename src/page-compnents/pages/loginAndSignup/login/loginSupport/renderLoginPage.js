import React from "react";

import RenderLoginForm from "./renderLoginForm";

export default function RenderLoginPage({
  handleOnSubmit,
  handleInputChange,
  isLoading,
  errorMessage,
}) {
  return (
    <React.Fragment>
      <img
        className="login-wave login-img"
        src={require("../img/wave.png")}
        alt="nice"
        aria-hidden="true"
      />
      <div className="login-container">
        <div className="login-img">
          <img
            style={{ width: "500px" }}
            src={require("../img/bg.svg")}
            alt="nice"
            aria-hidden="true"
          />
        </div>
        <div className="login-login-content">
          <RenderLoginForm
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
