import React from "react";
import Logo from "../images/logo-bookmark.svg";
function Header() {
  return (
    <header>
      <img id="logo" src={Logo} alt="Bookmark" />
      <nav id="navbar">
        <ul>
          <li className="nav-items"></li>
          <li className="nav-items"></li>
          <li className="nav-items"></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
