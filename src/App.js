import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./page-compnents/appRouter";

class App extends Component {
  state = {
    loggedIn: true,
  };
  // componentDidMount() {
  //   console.log("hi");
  //   // Auth.getAuthFromServer();
  // }
  render() {
    const supportHistory = "pushState" in window.history;
    return (
      <React.Fragment>
        <BrowserRouter forceRefresh={!supportHistory}>
          <Router />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
