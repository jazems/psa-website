import React from 'react';
import styles from "../../styles/Events/EventsInfo.module.css"

function EventsInfo() {
    return ( 
        <div className={styles.container}>
        <div className={styles.gridItem}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
        </div>
       <div className={styles.gridItem}>
            <p className={styles.title}>Culture Show</p>
            <p className={styles.description}>The annual culture show is our largest event of the year. It typically includes a variety of performances, such as lively dances, musical performances, a fashion show, and skits that showcase different aspects of Pakistani culture. Students, alumni and family members from all backgrounds are encouraged to attend. The culture show is a ways for us to build community, and raise awareness and appreciation for the diversity and richness of our heritage.</p>
        </div>

        <div className={styles.gridItem}>
            <p className={styles.title}>Mehndi Ki Raat</p>
            <p className={styles.description}>This is an event that features individual and group acts such as singing and dancing, delicious food, and an open dance floor and DJ. In the past, Cal PSA has collaborated with PSAs from other schools in order to host the event and to provide an exciting environment for students to socialize in. Mehndi Ki Raat is open to students and is typically hosted near the end of Fall semester.</p>
        </div>
        <div className={styles.gridItem} style={{textAlign: "right"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <p className={styles.title}>Berkeley Aur Baatein</p>
            <p className={styles.description}>This is a series of events that we organize at PSA, featuring guest speakers from various fields to engage in meaningful political discourse and promote cross-cultural exchange. We aim to bring in speakers who are experts in their respective fields, and who can offer unique perspectives on social and political issues facing Pakistan and the broader South Asian region.</p>
        </div>
    </div>
    );
}

export default EventsInfo;