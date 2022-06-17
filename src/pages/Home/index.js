import React, { useEffect, useState } from 'react';

import * as Components from '../../components'
import styles from './style.module.css'

export const HomePage = () => {

  return (
    <main>
      <title>Billie Dartnell</title> 
      <Components.Title/>
      <div className={styles.cardContainer}>
      <Components.PortfolioCard/>
      <Components.PortfolioCard/>
      <Components.PortfolioCard/>
      </div>
      <Components.ShortAboutMe/>
      <Components.ContactMeBtn/>
    </main>
  );
}

