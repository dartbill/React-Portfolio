import React from 'react'

import styles from './style.module.css'
import img from "./aboutme.png"


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
                                {/* <p className={styles.para2}>Skills:</p> */}
                                <div className={styles.iconContainer}>
                                    <i class="devicon-javascript-plain"></i>
                                    <i class="devicon-html5-plain"></i>
                                    <i class="devicon-css3-plain"></i>
                                    <i class="devicon-bootstrap-plain"></i>
                                    <i class="devicon-c-line"></i>
                                    <i class="devicon-cplusplus-line"></i>
                                    <i class="devicon-python-plain-wordmark"></i>
                                    <i class="devicon-react-original-wordmark"></i>
                                    <i class="devicon-redux-original"></i>
                                    <i class="devicon-nodejs-plain-wordmark"></i>
                                    <i class="devicon-npm-original-wordmark"></i>
                                    <i class="devicon-express-original-wordmark"></i>
                                    <i class="devicon-jest-plain"></i>
                                    <i class="devicon-git-plain"></i>
                                    <i class="devicon-github-original"></i>
                                    <i class="devicon-heroku-plain-wordmark"></i>
                                    <i class="devicon-mongodb-plain-wordmark"></i>
                                    <i class="devicon-postgresql-plain-wordmark"></i>
                                    <i class="devicon-docker-plain"></i>
                                    <i class="devicon-vscode-plain"></i>
                                    <i class="devicon-maya-plain-wordmark"></i>
                                </div>
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
