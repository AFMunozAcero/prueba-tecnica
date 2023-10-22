// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src="https://invictamexico.com/cdn/shop/files/Invicta-mexico.webp?v=1660064754&width=200"
        alt="Logo"
        className="logo"
      />
      <nav className="nav">
        <a href="#" className="nav-link">
          RELOJES
        </a>
        <a href="#" className="nav-link">
          EDICION ESPECIAL
        </a>
        <a href="#" className="nav-link">
          ACCESORIOS
        </a>
        <a href="#" className="nav-link">
          TECHNOMARINE
        </a>
        <a href="#" className="nav-link">
          OFERTAS
        </a>
      </nav>
    </header>
  );
};

export default Header;
