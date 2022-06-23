import React from "react";

import * as Components from "../../components";
import styles from "./style.module.css";

import pic from './smalltalk.png'
import rabbit from './rabbithabits.png'

export const HomePage = ({ home, about, contact, portfolio }) => {
  return (
    <>
      < div className={styles.snapContainer}>
        <title>Billie Dartnell</title>

        <section ref={home} className={styles.scrollSection}>
          <Components.Title />
        </section>

        <section ref={about} className={styles.scrollSection}>
          <Components.ShortAboutMe />
        </section>

        <section ref={portfolio} className={styles.scrollSection}>
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


        <section ref={contact} className={styles.scrollSection}>
          <Components.ContactMeBtn />
          {/* <Components.ContactForm /> */}
        </section>
      </div>
    </>
  );
};
