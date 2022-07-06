import React from 'react';

import styles from './style.module.css'


export const PortfolioCard = ({ img, website, link, title, info, programs }) => {

    return (
        <>
            <div id="div" className={styles.something}>
                <img className={` ${styles.images} ${styles.imgs}`} src={img} alt="" />
                <div className={styles.setWidth}>
                    <div className={` ${styles.container} ${styles.text} `}>
                        <h5 className={`${styles.noBG} ${styles.cardTitle}`} > <a className={styles.noBG} href={website} >{title}</a></h5>
                        <p className={styles.noBG}> {info}</p>
                        <p className={`${styles.noBG} ${styles.programs}`}> {programs}</p>
                        <div className={styles.linkContainer}>
                            <a className={styles.link} href={link} >To the code!</a>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
