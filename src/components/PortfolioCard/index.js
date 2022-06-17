import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css'

export const PortfolioCard = () => {

    return (
        <>
                <div  >
                    {/* <img src="./imgs/smalltalk.png"  alt="A screengrab of my website smallTalk"> */}
                        <div className={`${styles.container} ${styles.text} ${styles.card}`}>
                            <h5 ><a href="https://smalltalkapp.netlify.app/" >SmallTalk</a></h5>
                            <p >A simple anon journal site made in a team. I was involved in both the front-end and back-end of this project</p>
                            <p  >This project uses JavaScript and HTML/CSS as the main languages (I should add icons instead)</p>
                            <a className={styles.link} href="https://github.com/dartbill/smallTalk_Client" >A link to the code</a>
                        </div>
                </div>
        </>
        
        
    )
}
