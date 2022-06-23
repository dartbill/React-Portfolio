import React from 'react';
import styles from './style.module.css'

import { ContactForm } from '../ContactForm';


export const ContactMeBtn = () => {

  return (
    <>
      <div className={styles.container} >
        <h2 className={styles.text} >Get in touch!</h2>
        <ContactForm />
        {/* <a href="./contact.html" className={styles.button} >Contact me!</a> */}

        <div >

        </div>
      </div>
    </>
  )
}
