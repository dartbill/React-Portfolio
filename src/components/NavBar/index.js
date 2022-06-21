import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./style.module.css";

export const NavBar = ({ about, contact, portfolio }) => {
  const scrollDown = (ref) => {
    console.log("scrolldown is called")
    console.log("ref is " + ref.current)
    console.log(ref)
    const options = { behavior: 'smooth' }
    // window.scrollTo({
    //   top: ref.current,
    //   behavior: "smooth",
    // });
    ref.current.scrollIntoView(options)
  };

  return (
    <div className={styles.scrollSection}>
      <nav className={styles.Navcontainer}>

        <li onClick={() => {

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
