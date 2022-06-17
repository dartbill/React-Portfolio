import React from 'react';
import styles from './style.module.css'




export const ContactMeBtn = () => {

    return (
<>  
        <div className={styles.container} >
          <h2 className={styles.text} >Get in touch!</h2>
  
          <a href="./contact.html" className={styles.button} aria-pressed="true">Contact me!</a>
    
          <div >
    
        </div>
      </div>
</>
    )
}
