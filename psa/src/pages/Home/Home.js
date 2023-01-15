import React from 'react';
import Header from "../../components/Header"
import Section from "../../components/Section"
import Mission from "./Mission"
import Pillars from "./Pillars"
import Footer from "../../components/Footer"

function Home() {
    return ( 
    <div>
        <Header title="Cal Pakistani Student Assocation"/>
        <Section title="Our Mission" color="#006600" fontColor="white" children={<Mission/>} />
        <Section title="Our Pillars" children={<Pillars/>} />
        <Footer />
    </div>
    );
}

export default Home;