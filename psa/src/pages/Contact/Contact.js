import React from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Section from "../../components/Section"
import JoinInfo from "../JoinUs/JoinInfo"

function Contact() {
    return ( 
    <div>
        <Header title="Contact" collapse={true}/>
        <Section children={<JoinInfo />}/>
        <Footer />
    </div>
    );
}

export default Contact;