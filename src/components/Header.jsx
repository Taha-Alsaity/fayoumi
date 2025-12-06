import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/fay1.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-main">
      <div className="container-main">
        <div className="logo-main">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation */}
        <nav className={`nav-main ${isOpen ? "open" : ""}`}>
          <ul>
            <Link id="m-main" to="/" onClick={() => setIsOpen(false)}> <li>
             
                الرئيسية
              
            </li></Link>
              <Link to="/about#about" onClick={() => setIsOpen(false)}><li>
            
                من نحن
              
            </li></Link>
            <Link to="/Products#product" onClick={() => setIsOpen(false)}><li>
              
                المنتجات
              
            </li></Link>
            <Link to="/contact#contact" onClick={() => setIsOpen(false)}><li>
              
                تواصل
              
            </li></Link>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
