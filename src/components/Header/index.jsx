import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <Link to="/artists">Artists</Link>
      <Link to="/singles">Singles</Link>
    </header>
  );
};
export default Header;
