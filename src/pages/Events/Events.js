import React from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import EventsInfo from "./EventsInfo"
import Section from '../../components/Section';

function Events() {
    return ( 
    <div>
        <Header title="Events" collapse="true"/>
        <Section children={<EventsInfo />}/>
        <Footer />
    </div>
    );
}

export default Events;