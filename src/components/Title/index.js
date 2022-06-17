import React from 'react';

import styles from './style.module.css'


export const Title = () => {

    return (
    <>  
    <div className={styles.mainContainer}>

    <div className={styles.container}>
        <h1 className={styles.homepage}  >Hi, </h1>
        <h1 className={styles.homepage} >My name is Billie</h1>
    </div>

    <div className={styles.paraContainer} >
        <p className={styles.para}>Tech Trainee</p>
        <p className={styles.para}>I am currently undergoing a coding bootcamp. At this moment I am learning HTML, CSS, Bootstrap and JavaScript</p>
    </div>

    </div>
    </>
    )
}
