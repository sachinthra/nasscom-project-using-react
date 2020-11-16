import React, { Component } from "react";
import axios from "axios";

import InputForm from "./additionalFiles/inputForm";
import SecuredSearchResult from "./additionalFiles/securedSearchResult";
import "../comCss/boxWith3.css";
import Auth from "../../Auth";

class NoSQLInjection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      finalInputValue: "",
      headData: "",
      jsonData: [],
    };
  }

  componentDidMount() {
    console.log(this.props.baseURL);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    axios.defaults.baseURL = this.props.baseURL;
    axios
      .post("orm/products", { prod_name: this.state.inputValue })
      .then((res) => {
        console.log(res.data);
        if (res.data.status !== "Success") {
          Auth.signout();
        } else {
          this.setState({ headData: res.data.meta });
          this.setState({ jsonData: res.data.data });
          this.setState({ finalInputValue: this.state.inputValue });
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
        <h1 className="head">
          Product Display - Secured From XSS and SQL Injection
        </h1>
        <InputForm
          handleInputChange={this.handleInputChange}
          handleOnSubmit={this.handleOnSubmit}
        />

        {this.state.headData !== "" ? (
          <SecuredSearchResult
            finalInputValue={this.state.finalInputValue}
            headData={this.state.headData}
            jsonData={this.state.jsonData}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default NoSQLInjection;
