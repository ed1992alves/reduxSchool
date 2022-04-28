import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-sitename">
        <h3>You<span>Song</span></h3>
      </div>
      <div className="navbar-links">
        <Link to="/">Artists</Link>
        <Link to="/songs">Songs</Link>
      </div>
    </div>
  );
};

export default Navbar;
