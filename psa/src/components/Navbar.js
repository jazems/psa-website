import React from 'react';
import Button from './Button'
import styles from '../styles/Navbar.module.css'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.navbar}>
                <Link to="/">
                <div className={styles.navLinkGroup}>
                    <img style={{width:80, height:80}} src={logo}/>
                    <p style={{fontSize:24, fontWeight:300}} className={`${styles.PSA} ${styles.navLink}`}><a href="#">Cal PSA</a></p>
                </div>
                </Link>
                <div className={styles.navLinkGroup}>
                    <ul className={styles.navLinks}>
                        <li className={styles.navLink}><Link to="/events"><a href="#">Events</a></Link></li>
                        <li className={styles.navLink}><Link to="/board"><a href="#">Board</a></Link></li>
                        <li className={styles.navLink}><Link to="/join"><a href="#">Join Us</a></Link></li>
                    </ul>
                    <div style={{marginLeft:5}}>
                    <Button link="/contact" text="Contact" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;