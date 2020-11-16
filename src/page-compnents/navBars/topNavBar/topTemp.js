import "./index.css";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as CommentsRegular } from "./icons/commentsRegular.svg";
import { ReactComponent as DataBaseIcon } from "./icons/database.svg";
import { ReactComponent as CodeSolid } from "./icons/codeSolid.svg";
import { ReactComponent as CogSet } from "./icons/cog.svg";
import { ReactComponent as AddIcon } from "./icons/plus.svg";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./index.css";
import { Link } from "react-router-dom";

function TopTemp({ topNavHeight }) {
  const [open, setOpen] = useState(false);
  return (
    <Navbar topNavHeight={topNavHeight}>
      <NavItem icon={<CaretIcon />} isopen={open} setOpen={setOpen}>
        <DropdownMenu isopen={open} setOpen={setOpen}></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar" style={{ height: props.topNavHeight }}>
      <ul className="navbar-nav" style={{ marginRight: "50px" }}>
        {props.children}
      </ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <div className="icon-button" onClick={() => props.setOpen(!props.isopen)}>
        {props.icon}
      </div>

      {props.isopen && props.children}
    </li>
  );
}

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <div
        className="menu-item anchor-tag"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </div>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<CodeSolid />} goToMenu="XssAttack">
            XSS
          </DropdownItem>
          <DropdownItem leftIcon={<DataBaseIcon />} goToMenu="sql">
            Product Display
          </DropdownItem>
          <DropdownItem leftIcon={<CommentsRegular />} goToMenu="product">
            Product
          </DropdownItem>
          <DropdownItem leftIcon={<CogSet />} goToMenu="setting">
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "XssAttack"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>XSS</h2>
          </DropdownItem>
          <Link
            to="/XssWithVulnerability"
            onClick={() => props.setOpen(!props.isopen)}
            style={{ textDecoration: "none" }}
          >
            <DropdownItem leftIcon={<CodeSolid />}>
              XSS With Vulnerability
            </DropdownItem>
          </Link>
          <Link
            to="/XssWithNoVulnerability"
            onClick={() => props.setOpen(!props.isopen)}
            style={{ textDecoration: "none" }}
          >
            <DropdownItem leftIcon={<CodeSolid />}>
              XSS With No Vulnerability
            </DropdownItem>
          </Link>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "sql"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Product Display</h2>
          </DropdownItem>

          <Link
            to="/SQL-Injection"
            onClick={() => props.setOpen(!props.isopen)}
            style={{ textDecoration: "none" }}
          >
            <DropdownItem leftIcon={<DataBaseIcon />}>
              Product Display
            </DropdownItem>
          </Link>
          {/* secured-Product-table-display */}
          <Link
            to="/secured-Product-table-display"
            onClick={() => props.setOpen(!props.isopen)}
            style={{ textDecoration: "none" }}
          >
            <DropdownItem leftIcon={<DataBaseIcon />}>
              Secured XSS Display
            </DropdownItem>
          </Link>
          <Link
            to="/NoSQLInjection"
            onClick={() => props.setOpen(!props.isopen)}
            style={{ textDecoration: "none" }}
          >
            <DropdownItem leftIcon={<DataBaseIcon />}>
              Secured Display
            </DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "product"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Product</h2>
          </DropdownItem>
          <Link
            to="/homepage"
            onClick={() => props.setOpen(!props.isopen)}
            style={{ textDecoration: "none" }}
          >
            <DropdownItem leftIcon={<AddIcon />}>
              Product Informations
            </DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "setting"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Settings</h2>
          </DropdownItem>
          <Link
            to="/dashboard"
            onClick={() => props.setOpen(!props.isopen)}
            style={{ textDecoration: "none" }}
          >
            <DropdownItem leftIcon={<CogSet />}>DashBoard</DropdownItem>
          </Link>
          <Link
            to="/"
            onClick={() => props.setOpen(!props.isopen)}
            style={{ textDecoration: "none" }}
          >
            <DropdownItem leftIcon={<CogSet />}>Logout</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
    </div>
  );
}

export default TopTemp;
