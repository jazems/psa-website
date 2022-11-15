import React from 'react';
import Button from './Button'
import styles from '../styles/Navbar.module.css'
import logo from "../assets/logo.png"

function Navbar() {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.navbar}>
                <div className={styles.navLinkGroup}>
                    <img style={{width:60, height:60}} src={logo}/>
                    <p style={{fontSize:20, fontWeight:500}} className={`${styles.PSA} ${styles.navLink}`}><a href="#">Cal PSA</a></p>
                </div>
                <div className={styles.navLinkGroup}>
                    <ul className={styles.navLinks}>
                        <li className={styles.navLink}><a href="#">Events</a></li>
                        <li className={styles.navLink}><a href="#">Board</a></li>
                        <li className={styles.navLink}><a href="#">Join Us</a></li>
                    </ul>
                    <div style={{marginLeft:5}}>
                    <Button text="Contact" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;