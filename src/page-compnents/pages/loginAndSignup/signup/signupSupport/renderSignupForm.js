import React from "react";
import { Link } from "react-router-dom";

import InputField from "../../inputFields";

export default function RenderSignupForm({
  handleOnSubmit,
  handleInputChange,
  isLoading,
  errorMessage,
}) {
  return (
    <form onSubmit={handleOnSubmit}>
      <img src={require("../img/avatar.svg")} alt="nice" aria-hidden="true" />
      <h2 className="title">SignUp</h2>
      {errorMessage ? <div className="error-msg">{errorMessage}</div> : ""}
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
      <InputField
        iconType="fas fa-lock"
        headName="Confirm Password"
        inputName="confirmPassword"
        inputType="password"
        divType="pass"
        inputOnchange={handleInputChange}
      />

      <Link to="/login">Have a account - Login</Link>
      <input
        type="submit"
        className={isLoading ? "btn btn-disabled" : "btn"}
        disabled={isLoading}
        value={isLoading ? "Please Wait" : "Sign Up"}
      />
    </form>
  );
}
