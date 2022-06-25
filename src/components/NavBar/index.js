import React from "react";


import styles from "./style.module.css";

export const NavBar = ({ home, about, contact, portfolio }) => {



  const scrollDown = (ref) => {

    const options = { behavior: 'smooth' }
    ref.current.scrollIntoView(options)
  };

  return (
    <div className={styles.scrollSection}>
      <nav className={styles.Navcontainer}>

        <li className={`${styles.textColor} ${styles.hoverunderlineanimation}`} onClick={() => {
          scrollDown(home)
        }}>Home</li>
        <li className={`${styles.textColor} ${styles.hoverunderlineanimation}`} onClick={() => {
          scrollDown(about)
        }}>About</li>

        <li className={`${styles.textColor} ${styles.hoverunderlineanimation}`} onClick={() => {
          scrollDown(portfolio)
        }}>Projects</li>
        <li className={`${styles.textColor} ${styles.hoverunderlineanimation}`} onClick={() => {
          scrollDown(contact)
        }}>Contact</li>

      </nav>
    </div>
  );
};
