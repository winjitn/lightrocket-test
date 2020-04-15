import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav = (props) => {
  const siteElements = props.user.data.siteElements;

  return (
    <div className="ui container">
      <nav id="navbar">
        <ul className={siteElements.header.links.position}>
          <li>
            <NavLink className="nav-item logo" to={`/${props.userName}`}>
              {siteElements.header.logo.text}
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="link-active"
              className="nav-item"
              to={`/${props.userName}`}
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="link-active"
              className="nav-item"
              to={`/${props.userName}/about`}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
