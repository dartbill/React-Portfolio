import React from 'react';

import styles from './style.module.css'


export const Title = () => {

    return (
        <>
            <div className={styles.mainContainer}>

                <div className={styles.container}>
                    <h1 className={`${styles.homepage} ${styles.colour}`}>Hi, </h1>
                    <h1 className={styles.homepage} >My name is Billie</h1>
                </div>

                <div className={styles.paraContainer} >
                    <p className={styles.para}>Tech Trainee</p>
                    <p className={styles.para2}>Currently undergoing a coding bootcamp, learning all sorts about front and back end development</p>
                </div>

            </div>
        </>
    )
}
