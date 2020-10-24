import React, { Component } from "react";

import RenderLoginPage from "./loginSupport/renderLoginPage";
import { SendDataToServer } from "../sendDataToServer";

import "./login.css";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      password: "",
      loading: false,
      loggedIn: false,
      errorMessage: false,
    };
  }

  componentDidMount() {
    console.log(window.outerWidth, window.innerWidth);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const data = {
      user_name: this.state.user_name,
      password: this.state.password,
    };
    SendDataToServer({ link: "login", data: data })
      .then((res) => {
        console.log("rseponse", res.data);
        this.setState({ loading: false });
        if (res.data.status === true)
          this.setState({ loggedIn: res.data.status });
        else {
          console.log(res.data.error);
          this.setState({ errorMessage: res.data.error });
        }
      })
      .catch((err) => {
        this.setState({ errorMessage: "Network Error" });
        this.setState({ loading: false });
      });
  };
  handleInputChange = (event) => {
    event.preventDefault();
    if (this.state.errorMessage !== false) {
      this.setState({ errorMessage: false });
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loggedIn === true ? <Redirect to="/dashboard" /> : ""}
        <RenderLoginPage
          isLoggedIn={this.state.loggedIn}
          handleOnSubmit={this.handleOnSubmit}
          handleInputChange={this.handleInputChange}
          isLoading={this.state.loading}
          errorMessage={this.state.errorMessage}
        />
      </React.Fragment>
    );
  }
}

export default LoginPage;
