import Image from 'next/image';
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="20" height="20" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Skierniewice</div>
                    <div className={styles.text}>500 565 652</div>
                    <div className={styles.text}>Drzewica</div>
                    <div className={styles.text}>729 379 234</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                    <div className={styles.counter}>2</div>
                </div>
                <div className={styles.logoImage}>
                    <Image src="/img/logo.png" alt="" width="70px" height="70px" objectFit='cover' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;