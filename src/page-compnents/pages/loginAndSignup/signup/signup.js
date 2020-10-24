import React, { Component } from "react";

import RenderSignupPage from "./signupSupport/renderSignupPage";
import { SendDataToServer } from "../sendDataToServer";

import "./signup.css";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      password: "",
      loading: false,
      loggedIn: false,
      errorMessage: false,
      confirmPassword: "",
    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    if (this.state.confirmPassword === this.state.password) {
      const data = {
        user_name: this.state.user_name,
        password: this.state.password,
      };
      SendDataToServer({ link: "signup", data: data }).then((res) => {
        console.log("rseponse", res.data);
        this.setState({ loading: false });
        if (res.data.status === true) this.setState({ loggedIn: res.data });
        else {
          console.log(res.data.error);
          this.setState({ errorMessage: res.data.error });
        }
      });
    } else {
      this.setState({ errorMessage: "Comfirm Password not matching" });
      this.setState({ loading: false });
    }
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
        <RenderSignupPage
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

export default SignupPage;
