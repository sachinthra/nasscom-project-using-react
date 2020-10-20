import React, { useState } from "react";

export default function InputField({ inputName, inputType, inputOnchange }) {
  return (
    <React.Fragment>
      <div className="input-div">
        <div className="i">
          <i className="fas fa-user"></i>
        </div>
        {/* <h5>{"headName"}</h5> */}
        <div className="div">
          <input
            name={inputName}
            type={inputType}
            className="input"
            onChange={inputOnchange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
