import React from 'react'

import styles from './style.module.css'
import img from "./IMG_3721.png"


export const ShortAboutMe = () => {



    return (
        <>
            <div >
                <div className={styles.titlecontainer}>
                    <h2 className={styles.title} >about</h2>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.container}>

                        <div>
                            <div>
                                <p className={styles.para} >I am a graduate from Bournemouth university with a BA in Computer Animation and Technical Arts.<br></br>
                                    Outside of work I am an avid gym-goer and have completed two tough mudders, I love to read and anything to do with photography and drawing as well as just relaxing, watching my favourite series’ with my cats. <br></br>
                                    I love to travel, my favourite place I have been so far has been Venice with Greece being a close second if only because of the weather!</p>
                                <p className={styles.para2}>Skills:
                                    Command Line Interface | Git/GitHub | HTML/CSS | JavaScript | C/C++ | Bootstrap | Houdini | Maya </p>
                                {/* <a  href="./about.html">A little bit more?</a> */}
                            </div>
                        </div>
                    </div>

                    <div className={styles.imgs} >
                        <img className={styles.imgSize} src={img} alt="Logo" />
                    </div>
                </div>
            </div>
        </>
    )
}
