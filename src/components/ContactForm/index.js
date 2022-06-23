import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import styles from "./style.module.css"

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vc2rcjh', 'template_dakkjq8', form.current, 'yv_S7W5tjw5HlNoW8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.username.value = ""
        e.target.userEmail.value = ""
        e.target.message.value = ""

    };

    return (
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <div className={styles.something}>
                <label className={styles.label} name="user_name">Name:</label>
                <label className={styles.label} name="user_email">Email:</label>
            </div>
            <div className={styles.container}>
                <input className={`${styles.input} ${styles.font}`} id="username" type="text" name="user_name" placeholder='Input Name' />
                <input className={`${styles.input} ${styles.font}`} id="userEmail" type="email" name="user_email" placeholder='Input Email Address' />
            </div>
            <label className={styles.label}>Message</label>
            <textarea className={`${styles.font} ${styles.message}`} rows="4" id="message" name="message" placeholder='Send me a message!' />
            <div>
                <input className={`${styles.font} ${styles.button}`} type="submit" value="Send" />
            </div>
        </form>
    );
};

