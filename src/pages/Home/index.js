import React, { useEffect, useState } from "react";

import * as Components from "../../components";
import styles from "./style.module.css";







export const HomePage = () => {
  return (
    <>
      <div className={styles.snapContainer}>
        <title>Billie Dartnell</title>

        <section className={styles.scrollSection}>
          <Components.Title />
        </section>

        <section className={styles.scrollSection}>
          <h2 className={styles.text}>A Few Projects</h2>
          <div className={styles.cardContainer}>
            <Components.PortfolioCard website="https://smalltalkapp.netlify.app/" link="https://github.com/dartbill/smallTalk_Client" title="SmallTalk" info="A simple anon journal site made in a team. I was involved in both the front-end and back-end of this project" programs="This project uses JavaScript and HTML/CSS as the main languages (I should add icons instead)" />
            <Components.PortfolioCard />
            <Components.PortfolioCard />
          </div>
        </section>

        <section className={styles.scrollSection}>
          <Components.MoreProjectsBtn />
        </section>

        <section className={styles.scrollSection}>
          <Components.ShortAboutMe />
        </section>

        <section className={styles.scrollSection}>
          <Components.ContactMeBtn />
        </section>
      </div>
    </>
  );
};
