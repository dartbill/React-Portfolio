import React from 'react';

import styles from './style.module.css'
import img from "./IMG_3721.png"


export const ShortAboutMe = () => {

    return (
        <>
            <h2 className={styles.title} >A little bit about me</h2>
            <div className={styles.imgContainer}>
                <div className={styles.container}>

                    <div>
                        <div>
                            <p>Outside of work I am an avid gym-goer and have completed two tough mudders, I love to read and anything to do with photography and drawing as well as just relaxing, watching my favourite series’ with my cats. I love to travel, my favourite place I have been so far has been Venice with Greece being a close second if only because of the weather!</p>
                            <p>Skills at a glance
                                Command Line Interface

                                Git/GitHub

                                HTML/CSS

                                JavaScript

                                C/C++

                                Bootstrap

                                Houdini

                                Maya </p>
                            {/* <a  href="./about.html">A little bit more?</a> */}
                        </div>
                    </div>
                </div>

                <div className={styles.imgs} >
                    <img src={img} width="600" alt="Logo" />
                </div>
            </div>
        </>
    )
}
