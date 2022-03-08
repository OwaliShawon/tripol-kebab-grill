import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
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
                    <Link href="/" passHref>
                        <li className={styles.listItem}>Home</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <Link href="/cart" passHref>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </Link>
                <Link href="/" passHref>
                    <div className={styles.logoImage}>
                        <Image src="/img/logo.png" alt="" width="70px" height="70px" objectFit='cover' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;