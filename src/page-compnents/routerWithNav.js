import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

import NavBarMain from "./navBars/navBarMain";

const navDimensions = {
  closeNavWidth: "60px",
  openNavWidth: "200px",
  topNavHeight: "50px",
};

export default function RouterWithNav({ component: Component, ...rest }) {
  return (
    <NavBarMain
      closeNavWidth={navDimensions.closeNavWidth}
      openNavWidth={navDimensions.openNavWidth}
      topNavHeight={navDimensions.topNavHeight}
      navBarOpenState={false}
    >
      <Route
        {...rest}
        render={(props) =>
          Auth.getAuth() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    </NavBarMain>
  );
}
