import React, { Component } from "react";

import InputField from "./support-files/inputFields";
import "./xssVulnerable.css";

class XssVulnerable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      xssValue: "",
    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ xssValue: this.state.inputValue });
    console.log("Done");
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <img
          className="wave"
          src={require("./img-files/wave.png")}
          alt="nice"
          aria-hidden="true"
        />
        <div className="container">
          <div className="login-content">
            <InputField
              inputName="inputValue"
              inputType="text"
              inputOnchange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type="submit"
              className="btn"
              value="Send"
              onClick={this.handleOnSubmit}
            />
          </div>

          <div className="output">
            <span dangerouslySetInnerHTML={{ __html: this.state.xssValue }} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default XssVulnerable;
