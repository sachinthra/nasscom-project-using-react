import React, { Component } from "react";

import InputForm from "./additionalFiles/inputForm";
import SearchResult from "./additionalFiles/searchResult";
import "../comCss/boxWith3.css";
import { AxiosRequestToServer } from "../../axiosRequestToServer";
import Auth from "../../Auth";

import jsonData from "./additionalFiles/temp.json";
const headData = ["username", "message", "mid"];

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
    AxiosRequestToServer({ link: "", data: {} })
      .then((res) => {
        console.log(res.data);
        if (res.data.status !== "success") {
          Auth.signout();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
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
          <SearchResult
            finalInputValue={this.state.finalInputValue}
            headData={headData}
            jsonData={jsonData}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default SQLInjection;
