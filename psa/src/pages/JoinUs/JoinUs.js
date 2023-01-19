import React from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Section from '../../components/Section';
import JoinInfo from './JoinInfo';
import style from "../../styles/JoinUs/JoinUs.module.css"

function JoinUs() {
    return ( 
    <div>
        <Header title="Join Us" collapse={true}/>
        <Section children={<JoinInfo />} />
        <Footer />
    </div>
    );
}

export default JoinUs;