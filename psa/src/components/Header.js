import React from 'react';
import Navbar from "./Navbar"
import styles from "../styles/Header.module.css"

function Header({title}) {
    return ( 
        <div>
            <div className={styles.imageContainer}>
                <Navbar/>
                <img className={styles.image} src="https://wallpaperaccess.com/full/1660718.jpg" alt="main"/>
                <div className={styles.header}>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}

export default Header;