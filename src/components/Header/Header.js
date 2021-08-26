import React from "react";
import Logo from "../../images/logo-bookmark.svg";
import { Button } from "../Button";
import "./Header.css";
function Header() {
  return (
    <header id="header">
      <div id="headerContainer">
        <img id="logo" src={Logo} alt="Bookmark" />
        <nav id="navbar">
          <ul>
            <li className="navItems">
              {" "}
              <a href="/"> FEATURES </a>{" "}
            </li>
            <li className="navItems">
              {" "}
              <a href="/"> PRICING </a>{" "}
            </li>
            <li className="navItems">
              {" "}
              <a href="/"> CONTACT </a>{" "}
            </li>
            <Button head_foot id="loginBTN">
              LOGIN{" "}
            </Button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
