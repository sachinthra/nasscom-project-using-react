import React from "react";
import SideNavItem from "./SideNavItem";

export default function SideNavBar({
  mySidenavWidth,
  openNav,
  closeNav,
  navBarOpenState,
  jsonNavItems,
  topNavHeight,
}) {
  // {} props

  return (
    <React.Fragment>
      <div
        className="sidenav"
        style={{ width: mySidenavWidth, top: topNavHeight }}
      >
        {navBarOpenState ? (
          <div to="/" className="toggle-nav" onClick={closeNav}>
            {"<<<<<"}
          </div>
        ) : (
          <div to="/" className="toggle-nav" onClick={openNav}>
            {">>"}
          </div>
        )}

        {jsonNavItems.map((item) => {
          return (
            <SideNavItem
              key={item.id}
              item={item}
              navBarOpenState={navBarOpenState}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
