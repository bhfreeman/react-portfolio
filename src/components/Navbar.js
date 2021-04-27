import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="col-2 bg-dark text-white align-items-center">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
    </div>
  );
}

export default Navbar;
