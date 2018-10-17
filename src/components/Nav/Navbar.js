import React from "react";
import "./Navbar.css";

const Navbar = props => (

  <nav class="navbar navbar-default z-depth-3">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">Stars Hollow Clicky Game</a>
      <a class="navbar-brand" href="#">Click a character to earn points, but don't click the same one twice!</a>
      <a class="navbar-brand score" href="#">Score: {props.score}</a>
    </div>
  </div>
</nav>
// ...
//     <nav className="navbar z-depth-3">
//       <a href="/">Welcome</a>
//       <div> <a></a>Score:{props.score}</a></div>
//     </nav>
  );


  export default Navbar;
