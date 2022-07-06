import React from "react";
// import { slide as Menu } from 'react-burger-menu'

import styles from "./style.module.css";

export const NavBar = ({ home, about, contact, portfolio }) => {

  const scrollDown = (ref) => {

    const options = { behavior: 'smooth' }
    ref.current.scrollIntoView(options)
  };



  return (

    <>
      {/* <div className="something">
        <Menu right>
          <nav className="something">
            <li className="menu-item" >home</li>
            <li className="menu-item">about</li>
            <li className="menu-item">projects</li>
            <li className="menu-item">contact</li>
          </nav>
        </Menu>
      </div> */}



      <div className={`${styles.scrollSection} ${styles.hidenav}`}>
        <nav className={styles.Navcontainer}>

          <li className={`${styles.textColor} ${styles.hoverunderlineanimation}`} onClick={() => {
            scrollDown(home)
          }}>home</li>
          <li className={`${styles.textColor} ${styles.hoverunderlineanimation}`} onClick={() => {
            scrollDown(about)
          }}>about</li>

          <li className={`${styles.textColor} ${styles.hoverunderlineanimation}`} onClick={() => {
            scrollDown(portfolio)
          }}>projects</li>
          <li className={`${styles.textColor} ${styles.hoverunderlineanimation}`} onClick={() => {
            scrollDown(contact)
          }}>contact</li>

        </nav>
      </div>
    </>
  );
};
