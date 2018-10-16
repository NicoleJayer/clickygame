import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar z-depth-3">
      <ul>
      <li><a href="/">Welcome</a></li>
      <li><div> Score:{props.score}</div></li>
      </ul>
    </nav>
  );


  export default Navbar;
