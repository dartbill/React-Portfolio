import React from "react";
// import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import styles from "./style.module.css";

export const NavBar = () => {
  return (
    <div className={styles.scrollSection}>
      <nav className={styles.Navcontainer}>
        {/* <a href='//getfutureproof.co.uk/' target="_blank" rel="noopener noreferrer"> futureproof </a> */}
        <NavLink className={styles.textColor} to="/">
          Home
        </NavLink>
        <NavLink className={styles.textColor} to="/about">
          About
        </NavLink>
        <NavLink className={styles.textColor} to="/contact">
          Contact
        </NavLink>
        <NavLink className={styles.textColor} to="/portfolio">
          Portfolio
        </NavLink>
        {/* <BackButton /> */}
      </nav>
    </div>
  );
};
