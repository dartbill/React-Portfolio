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
            <Components.PortfolioCard />
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
