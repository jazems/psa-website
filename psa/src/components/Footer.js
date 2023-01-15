import React from 'react';
import Button from './Button'
import styles from '../styles/Footer.module.css'
import logo from "../assets/logo.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import tiktok from "../assets/tiktok.png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footer}>
            <div className={styles.leftWrapper}>
                <Link to="/">
                    <div style={{display:"flex", marginBottom: "15px"}}>
                        <img style={{width:80, height:80, marginRight:"20px"}} src={logo}/>
                        <p style={{fontSize:24, fontWeight:300, width:"225px"}} className={`${styles.PSA} ${styles.navLink}`}><a href="#">Cal Pakistani Student Association</a></p>
                    </div>
                </Link>
                <div className={styles.icons} style={{marginBottom: "15px"}}>
                    <a href="https://www.facebook.com/berkeleypsa" target="_"><img src={facebook} /></a>
                    <a href="https://www.instagram.com/psaucberkeley/" target="_"><img src={instagram} /></a>
                    <a href="https://www.tiktok.com/@psaucberkeley" target="_"><img src={tiktok} /></a>
                </div>
                <div>
                    <p style={{fontSize:"12px"}}>© 2022 Cal Pakistani Student Association</p>
                </div>
            </div>
            <div className={styles.rightWrapper}>
                <ul className={styles.navLinks}>
                            <li className={styles.navLink} style={{fontWeight:400}}><p>About Us</p></li>
                            <li className={styles.navLink}><Link to="/"><a href="#">Home</a></Link></li>
                            <li className={styles.navLink}><Link to="/events"><a href="#">Events</a></Link></li>
                            <li className={styles.navLink}><Link to="/board"><a href="#">Board</a></Link></li>
                </ul>
                <ul className={styles.navLinks}>
                            <li className={styles.navLink} style={{fontWeight:400}}><p>Get Involved</p></li>
                            <li className={styles.navLink}><Link to="/join"><a href="#">Join Us</a></Link></li>
                            <li className={styles.navLink}><Link to="/contact"><a href="#">Contact</a></Link></li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Footer;