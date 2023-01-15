import React from 'react';
import styles from "../styles/Button.module.css"
import { Link } from 'react-router-dom';

function Button({link, text}) {
    return (<>
    {link ? <Link to={link}><button className={styles.button}>{text}</button></Link> : <button className={styles.button}>{text}</button>}
    </>
        
    );
}

export default Button;