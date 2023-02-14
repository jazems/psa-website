import React from 'react';
import styles from "../../styles/Home/Pillars.module.css"
import Culture from "../../assets/pillars/culture.jpg"
import Society from "../../assets/pillars/society.jpg"
import Politics from "../../assets/pillars/politics.jpg"

function Pillars() {
    return ( 
    <div className={styles.pillarsContainer}>
        <div className={styles.gridItem}>
            <img src={Society} alt="" />
        </div>
       <div className={styles.gridItem}>
            <p className={styles.title}>Society</p>
            <p className={styles.description}>We promote a sense of community and belonging among Pakistani students at UC Berkeley through various means. Our events provide opportunities for students to come together, make new friends, and share their experiences and perspectives. We organize cultural, social, and educational events throughout the year, including cultural festivals, social gatherings, and academic seminars. We strive to create a space where create where students of all backgrounds feel welcomed, supported, and valued, and where they can connect with one another and with the broader campus community.</p>
        </div>

        <div className={styles.gridItem}>
            <p className={styles.title}>Culture</p>
            <p className={styles.description}>We strive to promote Pakistani culture and heritage among the campus community. We organize cultural events that showcase Pakistani music, dance, food, and traditions, providing opportunities for students to learn about and engage with the culture. In addition to our events, we work to build partnerships with other organizations to promote cross-cultural exchange and understanding. By sharing the richness and diversity of Pakistani culture, we hope to increase awareness and appreciation of its contributions to the global community, and to create a more inclusive and diverse campus environment that celebrates the unique perspectives and traditions of all students.</p>
        </div>
        <div className={styles.gridItem} style={{textAlign: "right"}}>
            <img src={Culture} alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src={Politics} alt="" />
        </div>
        <div className={styles.gridItem}>
            <p className={styles.title}>Politics</p>
            <p className={styles.description}>We organize events and initiatives that raise awareness about Pakistani social issues and advocate for good causes. For instance, we have held events and fundraisers focused on human rights, disaster relief, and social justice in Pakistan and around the world. We also work to raise awareness about issues facing the Pakistani diaspora, such as discrimination and stereotyping, and promote dialogue and understanding between different communities. Our goal is to empower Pakistani students to be active and engaged citizens, and to use their voices and skills to make a positive impact on the world.</p>
        </div>
    </div>
    );
}

export default Pillars;