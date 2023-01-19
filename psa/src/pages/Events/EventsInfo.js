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
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices eu ipsum eget facilisis. In ultrices neque ac euismod interdum. Nam eu lorem sed elit ornare vehicula. Suspendisse ultrices enim nunc, pellentesque feugiat velit viverra a. Morbi nec luctus purus. Suspendisse quam massa, accumsan sit amet tincidunt consequat, malesuada vel libero. Donec feugiat blandit metus, eget consequat mauris.</p>
        </div>

        <div className={styles.gridItem}>
            <p className={styles.title}>Mehndi Ki Raat</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices eu ipsum eget facilisis. In ultrices neque ac euismod interdum. Nam eu lorem sed elit ornare vehicula. Suspendisse ultrices enim nunc, pellentesque feugiat velit viverra a. Morbi nec luctus purus. Suspendisse quam massa, accumsan sit amet tincidunt consequat, malesuada vel libero. Donec feugiat blandit metus, eget consequat mauris.</p>
        </div>
        <div className={styles.gridItem} style={{textAlign: "right"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <p className={styles.title}>Another Event</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices eu ipsum eget facilisis. In ultrices neque ac euismod interdum. Nam eu lorem sed elit ornare vehicula. Suspendisse ultrices enim nunc, pellentesque feugiat velit viverra a. Morbi nec luctus purus. Suspendisse quam massa, accumsan sit amet tincidunt consequat, malesuada vel libero. Donec feugiat blandit metus, eget consequat mauris.</p>
        </div>
    </div>
    );
}

export default EventsInfo;