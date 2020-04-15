import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./Nav.css";

const Nav = (props) => {
  switch (props.user.statusCode) {
    case 200: {
      const user = props.location.pathname.split("/")[1];
      const siteElements = props.user.data.siteElements;
      return (
        <div className="ui container">
          <nav id="navbar">
            <ul className={siteElements.header.links.position}>
              <li>
                <NavLink className="nav-item logo" to={`/${user}`}>
                  {siteElements.header.logo.text}
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="link-active"
                  className="nav-item"
                  to={`/${user}`}
                >
                  Home
                </NavLink>
                <NavLink
                  activeClassName="link-active"
                  className="nav-item"
                  to={`/${user}/about`}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
    default: {
      return null;
    }
  }
};

export default withRouter(Nav);
