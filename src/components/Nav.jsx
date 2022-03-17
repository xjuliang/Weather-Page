import React from "react";
import Logo from "../img/logo.png";
import SearchBar from "./SearchBar.jsx";
import NavStyles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className={NavStyles.nav}>
      <Link to={"/"}>
        <div className={NavStyles.logo}>
          <img alt="weather logo" src={Logo} className={NavStyles.logoImg} />
          <h1 className={NavStyles.text}>WeatherApp</h1>
        </div>
      </Link>

      <Link to={"/about"} className={NavStyles.about}>
        About
      </Link>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
