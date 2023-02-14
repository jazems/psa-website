import React from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Section from "../../components/Section"
import ContactInfo from './ContactInfo';

function Contact() {
    return ( 
    <div>
        <Header title="Contact" collapse={true}/>
        <Section children={<ContactInfo />}/>
        <Footer />
    </div>
    );
}

export default Contact;