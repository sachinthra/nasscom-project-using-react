import React, { Component } from "react";
import "./xssVulnerable.css";

class XssVulnerable extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="body-tag">
          <h1>Vulnerable</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default XssVulnerable;
