import React, { Component } from "react";
import cookie from "react-cookies";
import axios from "axios";

import RenderLoginPage from "./loginSupport/renderLoginPage";
import Auth from "../../../Auth";

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
    console.log(cookie.load("userToken"));
    console.log(this.props.baseURL);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const data = {
      email: this.state.user_name,
      password: this.state.password,
    };
    console.log(data);

    axios.defaults.baseURL = this.props.baseURL;
    axios
      .post("unsafe/login", data)
      .then((res) => {
        this.setState({ loading: false });
        if (res.data.status === "success") {
          cookie.save("userToken", res.data.access_token, { path: "/" });
          cookie.save("userName", this.state.user_name, { path: "/" });
          Auth.authenticate();
          this.setState({ loggedIn: true });
        } else {
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
