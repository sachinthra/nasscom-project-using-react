import React from "react";

export default function InputForm({ handleInputChange, handleOnSubmit }) {
  return (
    <React.Fragment>
      <form className="item-input-field">
        <div className="i">
          <i className="fas fa-arrow-alt-circle-right"></i>
        </div>
        <input
          name="inputMessage"
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
