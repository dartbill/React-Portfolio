import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./style.module.css";

export const NavBar = ({ about, contact, portfolio }) => {
  console.log(about)
  const scrollDown = (ref) => {
    console.log(ref)
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.scrollSection}>
      <nav className={styles.Navcontainer}>

        <li onClick={() => {
          console.log('hello')
          scrollDown(about)
        }}>About</li>

        {/* <NavLink onClick={() => scrollDown(about)} className={styles.textColor} to="/">
          Home
        </NavLink> */}
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
