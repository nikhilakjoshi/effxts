import React from "react";
import { NavBarStyled } from "./../styled/NavaBar";
import { ReactSVG } from "react-svg";
const NavBar = () => {
  return (
    <NavBarStyled>
      <div className="logo">
        <div className="menu">
          <ReactSVG src="/src/logo/hamburger.svg" />
        </div>
        <div className="brand">
          <ReactSVG src="/src/logo/logo.svg" />
        </div>
      </div>
      <div className="buttons">Guide</div>
    </NavBarStyled>
  );
};

export default NavBar;
