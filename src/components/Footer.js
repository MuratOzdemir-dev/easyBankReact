import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__media">
        <Logo src="/images/logo-light.svg" />
        <Social />
      </div>
        <div className="footer__menu1">
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">Blog</a>
        </div>
        <div className="footer__menu2">
          <a href="/">Careers</a>
          <a href="/">Support</a>
          <a href="/">Privacy Policy</a>
        </div>
      <div className="footer__cpr">
        <Button />
        <p>&copy; Easybank. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
