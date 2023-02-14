import React from "react";
import { NavHashLink } from "react-router-hash-link";

function Menu() {
  const activeStyle = {
    color: "var(--main-color)",
  };

  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav ml-auto">
        <NavHashLink
          smooth
          to="/#top"
          className="nav-item nav-link"
          activeStyle={activeStyle}
        >
          <span data-hover="Início">Início</span>
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#project"
          className="nav-item nav-link"
          activeStyle={activeStyle}
        >
          <span data-hover="Projetos">Projetos</span>
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#statement"
          className="nav-item nav-link"
          activeStyle={activeStyle}
        >
          <span data-hover="Sobre mim">Sobre mim</span>
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#contact"
          className="nav-item nav-link"
          activeStyle={activeStyle}
        >
          <span data-hover="Contato">Contato</span>
        </NavHashLink>
      </div>
    </div>
  );
}

export default Menu;
