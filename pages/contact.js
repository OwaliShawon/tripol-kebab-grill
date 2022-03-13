import React from 'react';
import styles from "../styles/Contact.module.css";

const contact = () => {
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.contactBox}>
                <div className={styles.left}></div>
                <div className={styles.right}>
                    <h2 className={styles.contactText}>Contact Us</h2>
                    <input
                        type="text"
                        className={styles.field}
                        placeholder="Your Name"
                    />
                    <input
                        type="text"
                        className={styles.field}
                        placeholder="Your Email"
                    />
                    <input type="text" className={styles.field} placeholder="Phone" />
                    <textarea
                        placeholder="Message"
                        className={styles.textArea}
                    ></textarea>
                    <button className={styles.btn}>Send</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default contact;