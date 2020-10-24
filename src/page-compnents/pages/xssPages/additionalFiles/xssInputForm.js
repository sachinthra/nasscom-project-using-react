import React from "react";

export default function XssInputForm({ handleInputChange, handleOnSubmit }) {
  return (
    <React.Fragment>
      <form className="item-input-field">
        <div className="i">
          <i className="fas fa-arrow-alt-circle-right"></i>
        </div>
        <input
          name="inputValue"
          type="text"
          className="input"
          onChange={handleInputChange}
        />

        <div type="submit" className="btn" onClick={handleOnSubmit}>
          Send
        </div>
      </form>
    </React.Fragment>
  );
}
