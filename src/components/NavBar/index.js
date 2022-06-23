import React from "react";
// import { NavLink } from "react-router-dom";

import styles from "./style.module.css";

export const NavBar = ({ home, about, contact, portfolio }) => {
  const scrollDown = (ref) => {
    console.log(ref)
    const options = { behavior: 'smooth' }
    ref.current.scrollIntoView(options)
  };

  return (
    <div className={styles.scrollSection}>
      <nav className={styles.Navcontainer}>

        <li className={styles.textColor} onClick={() => {
          scrollDown(home)
        }}>Home</li>
        <li className={styles.textColor} onClick={() => {
          scrollDown(about)
        }}>About</li>

        <li className={styles.textColor} onClick={() => {
          scrollDown(portfolio)
        }}>Portfolio</li>
        <li className={styles.textColor} onClick={() => {
          scrollDown(contact)
        }}>Contact</li>

      </nav>
    </div>
  );
};
