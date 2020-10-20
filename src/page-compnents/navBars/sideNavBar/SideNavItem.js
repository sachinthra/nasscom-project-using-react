import React from "react";
import { Link } from "react-router-dom";

export default function SideNavItem({ item, navBarOpenState }) {
  // {} props
  console.log(navBarOpenState);
  return (
    <React.Fragment>
      {navBarOpenState ? (
        <Link to={item.link}>
          <i className={item.icon}>
            <span style={{ paddingLeft: "20px" }}>{item.name}</span>
          </i>
        </Link>
      ) : (
        <Link to={item.link}>
          <i className={item.icon}></i>
        </Link>
      )}
    </React.Fragment>
  );
}
