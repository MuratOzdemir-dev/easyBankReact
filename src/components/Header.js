import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import Button from "./Button";


function Header() {
  return (
    <header className="header">
      <Logo  src= "/images/logo-dark.svg"/>
      <Menu class="header__desktop-menu"/>
      <Menu class="header__mobile-menu"/>
      <Hamburger />
      <Button />
      <div className="header__overlay"></div>
    </header>
  );
}

export default Header;
