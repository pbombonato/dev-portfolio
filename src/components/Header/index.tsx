import React from "react";

import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import Logo from "../../assets/images/logo.png";

import useScrollDirection from "../../hooks/useScrollDirection";

function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <nav
      className={`navbar navbar-expand-sm navbar-light bg-white shadow-sm ${
        scrollDirection === "down" ? "d-none" : ""
      }`}
    >
      <div className="container col-11">
        <a className="navbar-brand" href="/">
          <img src={Logo} className="logo" />
        </a>

        <MobileMenu />
        <Menu />
      </div>
    </nav>
  );
}

export default Header;
