import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="col-2 bg-dark text-white position-fixed h-100 align-items-center row">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
          <img className="new-profile" src="Assets/images/profile.jpg" alt="profile of brett"/>
          </div>
          <div className="col-12">
            <Link class="link-text" to="/">
              Home
            </Link>
          </div>
          <div className="col-12">
            <Link class="link-text" to="/portfolio">Portfolio</Link>
          </div>
          <div className="col-12">
          <a className="link-text" href="Assets/BrettFreemanresume.pdf" download>Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
