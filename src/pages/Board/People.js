import React from 'react';
import Card from "../../components/Card"
import styles from "../../styles/Board/People.module.css"
import Hashim from "../../assets/board/hashim.jpg"
import Saeed from "../../assets/board/saeed.jpg"
import Amal from "../../assets/board/amal.jpg"
import Azmarak from "../../assets/board/azmarak.jpg"
import Jazem from "../../assets/board/jazem.jpg"
import Manal from "../../assets/board/manal.jpg"
import Mashal from "../../assets/board/mashal.jpg"
import Mustafa from "../../assets/board/mustafa.jpg"
import Raaed from "../../assets/board/raaed.jpg"
import Sundus from "../../assets/board/sundus.jpg"

function People() {
    return ( 
    <div className={styles.container}>
        <div className={styles.gridItem}>
            <Card firstName="Saeed" lastName="Naeem" role="President" avi={Saeed} email="saeednaeem@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Hashim" lastName="Piracha" role="Director of Operations" avi={Hashim} email="hashim7@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Azmarak" lastName="Kakakhel" role="Director of Finance" avi={Azmarak} email="azmarak.kakakhel@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Mashal" lastName="Imtiaz" role="Secretary" avi={Mashal} email="mashalimtiaz@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Amal" lastName="Imran" role="Co-Director of Logistics" avi={Amal} email="aimran2021@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Mustafa" lastName="Jawaid" role="Director of Internal Affairs" avi={Mustafa} email="mustafajawaid@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Jazem" lastName="Siddiqui" role="Director of Transportation Services" avi={Jazem} email="jazem@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Raaed" lastName="Kamran" role="Co-Director of Logistics" avi={Raaed} email="raaed.kamran@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Sundus" lastName="Khan" role="Director of Marketing" avi={Sundus} email="sunduskh@berkeley.edu"/>
        </div>
    </div> );
}

export default People;