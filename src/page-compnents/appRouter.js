import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import DashBoard from "./pages/dashBoard/dashBoard";

import XssWithVulnerability from "./pages/xssPages/xssWithVulnerability";
import XssWithNoVulnerability from "./pages/xssPages/xssWithNoVulnerability";

import ProductPost from "./pages/homePage/productPost";
import SQLInjection from "./pages/SqlInjection/SqlInjection";
import LoginPage from "./pages/loginAndSignup/login/login";
import Template from "./pages/template/template";

import RouterWithNav from "./routerWithNav";

class Router extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <RouterWithNav exact path="/dashboard" component={DashBoard} />
        <RouterWithNav exact path="/SQL-Injection" component={SQLInjection} />
        <RouterWithNav exact path="/homepage" component={ProductPost} />
        <RouterWithNav
          exact
          path="/XssWithVulnerability"
          component={XssWithVulnerability}
        />
        <RouterWithNav
          exact
          path="/XssWithNoVulnerability"
          component={XssWithNoVulnerability}
        />
        <Route component={Template} />
      </Switch>
    );
  }
}

export default Router;
