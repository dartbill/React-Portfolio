import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css'




export const ContactMeBtn = () => {

    return (
<>  
        <div className={styles.container} >
          <h2 className={styles.text} >Get in touch!</h2>
  
          <a href="./contact.html"  role="button" aria-pressed="true">Contact me!</a>
    
          <div >
    
        </div>
      </div>
</>
    )
}
