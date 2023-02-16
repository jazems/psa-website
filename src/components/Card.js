import React from 'react';
import styles from "../styles/Card.module.css"

function Card({firstName, lastName, role, email, avi}) {
    return (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <img src={avi} alt="avi" />
        </div>
        <div className={styles.cardBody}>
            <p style={{fontSize: "20px"}}>{firstName} {lastName}</p>
            <p>{role}</p>
            <p style={{fontSize: "12px", marginTop: "4px"}}>{email}</p>
        </div>
    </div>
  );
}

export default Card;