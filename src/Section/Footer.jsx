import React from "react";
import { Link } from "react-router-dom";
import { links } from "../data";
import logo from "../assets/scroll.svg";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container footer-content">
        <div className="nav-logo">
          <img src={logo} alt={logo} />
          <a className="logo" href="">
            ScrollySwap
          </a>
        </div>

        <ul className="footer-items">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
