import React, {useState, useEffect} from 'react';
import Button from './Button'
import styles from '../styles/Navbar.module.css'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
      setWindowDimension(window.innerWidth);
    }, []);
  
    useEffect(() => {
      function handleResize() {
        setWindowDimension(window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const isMobile = windowDimension <= 768;

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return ( 
        <>
        {isMobile ? (<div className={styles.wrapper}>
        <div className={styles.navbar}>
            <Link to="/">
            <div style={{display: "flex", alignItems: "center"}}>
                <img style={{width:80, height:80}} src={logo}/>
                <p style={{fontSize:24, fontWeight:300}} className={`${styles.PSA} ${styles.navLink}`}><a href="#">Cal PSA</a></p>
            </div>
            </Link>
            <div className={styles.mobile}>
                {isClicked? <></>
                :<button styles={{color: "white"}} onClick={handleClick}><FaBars/></button>}
            </div>
        </div>
        <div className={`${styles.navLinkGroup} ${isClicked? styles.isClicked: ""}`}>
        <button className={styles.closeIcon} onClick={handleClick}><FaTimes/></button>
        <ul className={styles.navLinks}>
            <li className={styles.navLink}><Link to="/events"><a href="#">Events</a></Link></li>
            <li className={styles.navLink}><Link to="/board"><a href="#">Board</a></Link></li>
            <li className={styles.navLink}><Link to="/join"><a href="#">Join Us</a></Link></li>
            <li className={styles.navLink}><Link to="/contact"><a href="#">Contact</a></Link></li>
        </ul>
    </div>
    </div>) : (<div className={styles.wrapper}>
        <div className={styles.navbar}>
            <Link to="/">
            <div style={{display: "flex", alignItems: "center"}}>
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
    </div>)}
    </>
    );
}

export default Navbar;