import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

export default function DashBoard({ baseURL }) {
  // {} props

  return (
    <React.Fragment>
      <img
        className="wave"
        src={require("../resourses/img-files/wave.png")}
        alt="nice"
        aria-hidden="true"
      />
      <h1 style={{ textAlign: "center" }}>DashBoard - {baseURL}</h1>
      <div className="dashboard-main">
        <div className="dashboard-dashboard">
          <div className="dashboard-br">
            <section>
              <Link to="/XssWithVulnerability" className="dashboard-link">
                <div className="dashboard-small dashboard-item">
                  <h1 className="dashboard-h1">XSS Vulnerable</h1>
                  <p className="dashboard-box-content">
                    This Page is Vulnerable. In this Vulnerable Page it allowes
                    DOM Based and Phishing Attack
                  </p>
                </div>
              </Link>
              <Link to="/XssWithNoVulnerability" className="dashboard-link">
                <div className="dashboard-small dashboard-item">
                  <h1 className="dashboard-h1">XSS Not Vulnerable</h1>
                  <p className="dashboard-box-content">
                    This Page Prevents any type of XSS attack
                  </p>
                </div>
              </Link>
            </section>
            <section>
              <Link to="/SQL-Injection" className="dashboard-link">
                <div className="dashboard-small dashboard-item">
                  <h1 className="dashboard-h1">Products Display</h1>
                  <p className="dashboard-box-content">
                    This Page is Vulnerable. It will render the Item Without
                    Stringifying it.
                  </p>
                </div>
              </Link>
              <Link
                to="/secured-Product-table-display"
                className="dashboard-link"
              >
                <div className="dashboard-small dashboard-item">
                  <h1 className="dashboard-h1">Product Display</h1>
                  <p className="dashboard-box-content">
                    This Page Prevents those XSS attack which is done through
                    SQL
                  </p>
                </div>
              </Link>
            </section>
            <section>
              <Link to="/homepage" className="dashboard-link">
                <div className="dashboard-small dashboard-item">
                  <h1 className="dashboard-h1">ADD Product</h1>
                  <p className="dashboard-box-content">
                    This Page is for Adding Items in to DataBase
                  </p>
                </div>
              </Link>
            </section>

            <div className="dashboard-column">
              <div className="dashboard-item">
                <h1 className="dashboard-h1">Team Members</h1>
                <p className="dashboard-box-content">
                  18BIT0009 - Raman
                  <br />
                  18BIT0020 - Sachinthra
                  <br />
                  18BIT0026 - Rahul
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
