import React from 'react';

import styles from './style.module.css'


export const PortfolioCard = ({ img, website, link, title, info, programs }) => {

    return (
        <>
            <div id="div" className={styles.something}>
                <img className={` ${styles.images} ${styles.imgs}`} src={img} alt="" />
                <div>
                    <div className={` ${styles.container} ${styles.text} `}>
                        <h5 className={styles.noBG} > <a className={styles.noBG} href={website} >{title}</a></h5>
                        <p className={styles.noBG}> {info}</p>
                        <p className={styles.noBG}> {programs}</p>
                        <a className={styles.link} href={link} >A link to the code</a>
                    </div>
                </div>
            </div>
        </>


    )
}
