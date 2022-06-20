import React from 'react';

import styles from './style.module.css'


export const PortfolioCard = ({ img, website, link, title, info, programs }) => {

    return (
        <>
            <div >
                <img className={styles.imgs} src={img} alt="" />
                <div className={` ${styles.container} ${styles.text} ${styles.card} `}>
                    <h5> <a href={website} >{title}</a></h5>
                    <p> {info}</p>
                    <p> {programs}</p>
                    <a className={styles.link} href={link} >A link to the code</a>
                </div>
            </div>
        </>


    )
}
