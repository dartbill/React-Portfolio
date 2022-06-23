import React, { useEffect } from "react";

import * as Components from "../../components";
import styles from "./style.module.css";

import pic from './smalltalk.png'
import rabbit from './rabbithabits.png'

export const HomePage = ({ home, about, contact, portfolio }) => {



  const handleClick = () => {
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      console.log(rect)
      console.log('this is the height ' + window.innerHeight)
      console.log('this is the width ' + window.innerWidth)
      return (
        rect.y < 10 && rect.y >= 0
      );
    }
    console.log(isInViewport(home.current, 0))
    console.log(isInViewport(about.current, 1393))
    console.log(isInViewport(contact.current, 3514.046875))
    console.log(isInViewport(portfolio.current, 2696.28125))

  }
  return (
    <>
      <div className={styles.snapContainer}>
        <title>Billie Dartnell</title>

        <section onClick={handleClick} id='something' ref={home} className={styles.scrollSection}>
          <Components.Title />
        </section>

        <section onClick={handleClick} ref={about} className={styles.scrollSection}>
          <Components.ShortAboutMe />
        </section>

        <section onClick={handleClick} ref={portfolio} className={styles.scrollSection}>
          <h2 className={styles.text}>A Few Projects</h2>
          <div className={styles.cardContainer}>
            <Components.PortfolioCard img={pic} website="https://smalltalkapp.netlify.app/" link="https://github.com/dartbill/smallTalk_Client" title="SmallTalk" info="A simple anon journal site made in a team. I was involved in both the front-end and back-end of this project" programs="This project uses JavaScript and HTML/CSS as the main languages (I should add icons instead)" />
            <Components.PortfolioCard img={rabbit} website="https://rabbit-habits.netlify.app/" link="https://github.com/Aaron-Marsh/Lap2_project_client" title="Rabbit Habits" info="A habit tracker" programs="This project uses JavaScript and HTML/CSS as the main languages (I should add icons instead)" />
            <Components.PortfolioCard />
          </div>
        </section>

        {/* <section className={styles.scrollSection}>
          <Components.MoreProjectsBtn />
        </section> */}


        <section onClick={handleClick} ref={contact} className={styles.scrollSection}>
          <Components.ContactMeBtn />
          {/* <Components.ContactForm /> */}
        </section>
      </div>
    </>
  );
};
