import React, { Component } from "react";

import InputForm from "./additionalFiles/inputForm";
import SearchResult from "./additionalFiles/searchResult";
import "../comCss/boxWith3.css";

class SQLInjection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      finalInputValue: "",
    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ finalInputValue: this.state.inputValue });
    console.log(this.state.finalInputValue);
  };

  handleInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <img
          className="wave"
          src={require("../resourses/img-files/wave.png")}
          alt="nice"
          aria-hidden="true"
        />
        <h1 className="head">SQL Injection</h1>
        <InputForm
          handleInputChange={this.handleInputChange}
          handleOnSubmit={this.handleOnSubmit}
        />

        {this.state.finalInputValue !== "" ? (
          <SearchResult finalInputValue={this.state.finalInputValue} />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default SQLInjection;
