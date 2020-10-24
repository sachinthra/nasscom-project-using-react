import React from "react";

import InputField from "../../inputFields";

export default function RenderLoginForm({
  handleOnSubmit,
  handleInputChange,
  isLoading,
  errorMessage,
}) {
  return (
    <form className="login-form" onSubmit={handleOnSubmit}>
      <img src={require("../img/avatar.svg")} alt="nice" aria-hidden="true" />
      <h2 className="title">Login</h2>
      {errorMessage ? (
        <div className="login-error-msg">{errorMessage}</div>
      ) : (
        ""
      )}
      <InputField
        iconType="fas fa-user"
        headName="Username"
        inputName="user_name"
        inputType="text"
        divType="one"
        inputOnchange={handleInputChange}
      />
      <InputField
        iconType="fas fa-lock"
        headName="Password"
        inputName="password"
        inputType="password"
        divType="pass"
        inputOnchange={handleInputChange}
      />

      <input
        type="submit"
        style={{ left: "0px" }}
        className={isLoading ? "login-btn login-btn-disabled" : "login-btn"}
        disabled={isLoading}
        value={isLoading ? "Please Wait" : "Login"}
      />
    </form>
  );
}
