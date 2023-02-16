import React from 'react';
import Navbar from "./Navbar"
import styles from "../styles/Header.module.css"
import background from "../assets/background.jpg"

function Header({title, collapse}) {

    return ( 
        <>
        {collapse? 
        <div>
            <div className={styles.imageContainer} style={{height: "500px"}}>
                <Navbar/>
                <img className={styles.image} src={background} alt="main"/>
                <div className={styles.header}>
                    <p>{title}</p>
                </div>
            </div>
        </div> : 
        <div>
            <div className={styles.imageContainer} style={{height: "100vh"}}>
                <Navbar/>
                <img className={styles.image} src={background} alt="main"/>
                <div className={styles.header}>
                    <p>{title}</p>
                </div>
            </div>
    </div>
    }
    </>
    );
}

export default Header;