import React, { useState } from "react";
import logo from "../assets/scroll.svg";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  function handleClicked() {
    setClicked(!clicked);
  }

  return (
    <header className="nav-header">
      <nav className="nav container">
        <div className="nav-logo">
          <img src={logo} alt={logo} />
          <a className="logo" href="">
            ScrollySwap
          </a>
        </div>

        <div className="nav-container">
          <ul className={clicked ? "nav-link active " : "nav-link"}>
            {links.map((link, id) => {
              return (
                <li key={id}>
                  <NavLink className="nav-item" to={link.url}>
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <a href="#">
          <button type="button" className="btn nav-btn">
            Launch App
          </button>
        </a>

        <div className="mobile" onClick={handleClicked}>
          <FontAwesomeIcon
            className="hamburger"
            icon={clicked ? faTimes : faBars}
            id="bar"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
