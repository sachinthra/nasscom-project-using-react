import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import DashBoard from "./pages/dashBoard/dashBoard";

import XssWithVulnerability from "./pages/xssPages/xssWithVulnerability";
import XssWithNoVulnerability from "./pages/xssPages/xssWithNoVulnerability";

import ProductPost from "./pages/homePage/productPost";
import SQLInjection from "./pages/SqlInjection/SqlInjection";
import NoSQLInjection from "./pages/SqlInjection/NoSqlInjection";
import ProductTableDisplay from "./pages/SqlInjection/ProductTableDisplay";
import LoginPage from "./pages/loginAndSignup/login/login";
import Template from "./pages/template/template";

import RouterWithNav from "./routerWithNav";

class Router extends Component {
  state = { baseURL: "http://b03e7da41275.ngrok.io/" };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={() => <LoginPage baseURL={this.state.baseURL} />}
        />
        <RouterWithNav
          exact
          path="/dashboard"
          component={() => <DashBoard baseURL={this.state.baseURL} />}
        />
        <RouterWithNav
          exact
          path="/SQL-Injection"
          component={() => <SQLInjection baseURL={this.state.baseURL} />}
        />
        <RouterWithNav
          exact
          path="/homepage"
          component={() => <ProductPost baseURL={this.state.baseURL} />}
        />
        <RouterWithNav
          exact
          path="/XssWithVulnerability"
          component={() => (
            <XssWithVulnerability baseURL={this.state.baseURL} />
          )}
        />
        <RouterWithNav
          exact
          path="/XssWithNoVulnerability"
          component={() => (
            <XssWithNoVulnerability baseURL={this.state.baseURL} />
          )}
        />
        <RouterWithNav
          exact
          path="/secured-Product-table-display"
          component={() => <ProductTableDisplay baseURL={this.state.baseURL} />}
        />
        <RouterWithNav
          exact
          path="/NoSQLInjection"
          component={() => <NoSQLInjection baseURL={this.state.baseURL} />}
        />
        <Route component={() => <Template baseURL={this.state.baseURL} />} />
      </Switch>
    );
  }
}

export default Router;
