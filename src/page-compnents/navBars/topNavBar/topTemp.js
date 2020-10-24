import "./index.css";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { ReactComponent as DataBaseIcon } from "./icons/database.svg";

import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./index.css";
import { Link } from "react-router-dom";

function TopTemp({ topNavHeight }) {
  return (
    <Navbar topNavHeight={topNavHeight}>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
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
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <div className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </div>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
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
        <span className="icon-right">{props.rightIcon}</span>
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
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="XssAttack"
          >
            XSS
          </DropdownItem>
          <DropdownItem
            leftIcon={<DataBaseIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="sql"
          >
            SQL
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
          <Link to="/XssWithVulnerability" style={{ textDecoration: "none" }}>
            <DropdownItem leftIcon={<BoltIcon />}>
              XSS With Vulnerability
            </DropdownItem>
          </Link>
          <Link to="/XssWithNoVulnerability" style={{ textDecoration: "none" }}>
            <DropdownItem leftIcon={<BoltIcon />}>
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
            <h2>SQL</h2>
          </DropdownItem>
          <Link to="/SQL-Injection" style={{ textDecoration: "none" }}>
            <DropdownItem leftIcon={<DataBaseIcon />}>
              SQL Injection
            </DropdownItem>
          </Link>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default TopTemp;
