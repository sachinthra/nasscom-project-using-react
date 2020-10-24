import React, { useState } from "react";

export default function InputField({
  iconType,
  headName,
  inputName,
  inputType,
  divType,
  inputOnchange,
}) {
  // {} props
  const [inputDiv, setInputDiv] = useState("");

  function addcl() {
    setInputDiv("focus");
  }

  function remcl(event) {
    // console.log(event.target.value)
    if (event.target.value === "") setInputDiv("");
  }
  return (
    <React.Fragment>
      <div className={"login-input-div " + divType + " " + inputDiv}>
        <div className="i">
          <i className={iconType}></i>
        </div>
        <div className="div">
          <h5>{headName}</h5>
          <input
            name={inputName}
            type={inputType}
            className="login-input"
            onFocus={addcl}
            onBlur={remcl}
            onChange={inputOnchange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
