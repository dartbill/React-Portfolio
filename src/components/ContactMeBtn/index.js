import React from 'react';
import styles from './style.module.css'

import { ContactForm } from '../ContactForm';


export const ContactMeBtn = () => {

  return (
    <>
      <div className={styles.titlecontainer}>
        <h2 className={styles.text} >contact</h2>
      </div>
      <div className={styles.container} >
        <ContactForm />
        {/* <a href="./contact.html" className={styles.button} >Contact me!</a> */}

        <div >

        </div>
      </div>
    </>
  )
}
