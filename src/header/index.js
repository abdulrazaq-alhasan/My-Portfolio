import React, { useState, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
    document.body.classList.toggle("ovhidden");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("ovhidden");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`site__header fixed-top ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          <Link className="navbar__logo" to="/" onClick={closeMenu}>
            {logotext}
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar__nav desktop-nav">
            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.path} className="navbar__link-item">
                  <Link
                    to={link.path}
                    className={`navbar__link ${location.pathname === link.path ? "navbar__link--active" : ""
                      }`}
                  >
                    {link.label}
                    <span className="navbar__link-indicator"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <Themetoggle />
            <button className="menu__button nav__mobile-toggle" onClick={handleToggle} aria-label="Toggle menu">
              {isMenuOpen ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav__overlay ${isMenuOpen ? "mobile-nav__overlay--open" : ""}`}>
          <div className="mobile-nav__bg"></div>
          <div className="mobile-nav__content">
            <ul className="mobile-nav__links">
              {navLinks.map((link, index) => (
                <li
                  key={link.path}
                  className="mobile-nav__link-item"
                  style={{ transitionDelay: `${isMenuOpen ? 0.1 + index * 0.08 : 0}s` }}
                >
                  <Link
                    to={link.path}
                    className={`mobile-nav__link ${location.pathname === link.path ? "mobile-nav__link--active" : ""
                      }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mobile-nav__footer">
              <div className="mobile-nav__socials">
                <a href={socialprofils.facebook} target="_blank" rel="noreferrer">Facebook</a>
                <a href={socialprofils.github} target="_blank" rel="noreferrer">Github</a>
                <a href={socialprofils.twitter} target="_blank" rel="noreferrer">Twitter</a>
              </div>
              <p className="mobile-nav__copyright">© {new Date().getFullYear()} {logotext}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
