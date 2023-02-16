import React, { Component } from 'react';
import styles from "../styles/Section.module.css"

function Section({title, color, fontColor, children}) {
    return (
        <div className={styles.sectionContainer} style={{backgroundColor: color, color: fontColor}}>
            <div className={styles.title}>
                <p>{title}</p></div>
            {children}
        </div>
     );
}

export default Section;