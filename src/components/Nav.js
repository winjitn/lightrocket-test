import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav>
      <ul>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
      </ul>
    </nav>
  );
};
