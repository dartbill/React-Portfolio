import React, { useEffect, useState } from 'react';

import * as Components from '../../components'
import styles from './style.module.css'

export const HomePage = () => {

  return (
    <main>
      <title>Billie Dartnell</title> 
      <Components.Title/>
      <h2 className={styles.text} >A Few Projects</h2>
      <div className={styles.cardContainer}>
      <Components.PortfolioCard/>
      <Components.PortfolioCard/>
      <Components.PortfolioCard/>
      </div>
      <Components.MoreProjectsBtn/>
      <Components.ShortAboutMe/>
      <Components.ContactMeBtn/>
    </main>
  );
}

