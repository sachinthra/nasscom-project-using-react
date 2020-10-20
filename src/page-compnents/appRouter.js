import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import DashBoard from "./pages/dashBoard/dashBoard";
import XssVulnerable from "./pages/xssVulnerable/xssVulnerable";
import Template from "./pages/template/template";

import RouterWithNav from "./routerWithNav";

class Router extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <RouterWithNav exact path="/dashboard" component={DashBoard} />
        <RouterWithNav exact path="/xss-vulnerable" component={XssVulnerable} />
        <Route component={Template} />
      </Switch>
    );
  }
}

export default Router;
