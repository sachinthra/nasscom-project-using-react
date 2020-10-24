import React, { Component } from "react";
import SideNavBar from "./sideNavBar/sideNavBar";
// import TopNavBar from "./topNavBar/topNavBar";

import "./navBarMain.css";
import "./topNavBar.css";

import TopTemp from "./topNavBar/topTemp";
const jsonNavItems = [
  // { id: 1, name: "Login", link: "/login", icon: "fas fa-sign-in-alt" },
  // { id: 2, name: "Signup", link: "/signup", icon: "fas fa-user-plus" },
  // { id: 3, name: "Home", link: "/", icon: "fas fa-house-user" },
];
/*
Props needed 
    closeNavWidth
    openNavWidth
    loggedIn
    routeComponents : {link:"/dashboard",component: DashBoard}
*/
class NavBarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mySidenavWidth: this.props.closeNavWidth,
      marginLeft: this.props.closeNavWidth,
      navBarOpenState: this.props.navBarOpenState || false,
      topNavHeight: this.props.topNavHeight || "0px",
    };
  }

  openNav = () => {
    this.setState({
      mySidenavWidth: this.props.openNavWidth,
      marginLeft: this.props.openNavWidth,
    });
    this.setState({ navBarOpenState: true });
  };

  closeNav = () => {
    this.setState({
      mySidenavWidth: this.props.closeNavWidth,
      marginLeft: this.props.closeNavWidth,
    });
    this.setState({ navBarOpenState: false });
  };

  render() {
    return (
      <React.Fragment>
        <SideNavBar
          mySidenavWidth={this.state.mySidenavWidth}
          openNav={this.openNav}
          closeNav={this.closeNav}
          navBarOpenState={this.state.navBarOpenState}
          topNavHeight={this.state.topNavHeight}
          jsonNavItems={jsonNavItems}
        />
        <div
          className="mainexside"
          style={{ marginLeft: this.state.marginLeft }}
        >
          {/* <TopNavBar topNavHeight={this.state.topNavHeight} marginLeft="0px" /> */}
          <TopTemp topNavHeight={this.state.topNavHeight} />
          <div
            className="mainextop"
            style={{ marginTop: this.state.topNavHeight }}
          >
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBarMain;
