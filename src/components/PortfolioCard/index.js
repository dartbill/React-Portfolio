import React from 'react';

import styles from './style.module.css'
import img from "./smalltalk.png"

export const PortfolioCard = ({ website, link, title, info, programs }) => {

    return (
        <>
            <div  >
                <div className={`${styles.container} ${styles.text} ${styles.card}`}>
                    <h5> <a href={website} >{title}</a></h5>
                    <p> {info}</p>
                    <p> {programs}</p>
                    <a className={styles.link} href={link} >A link to the code</a>
                </div>
            </div>
        </>


    )
}
