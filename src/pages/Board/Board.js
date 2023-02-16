import React from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import People from "./People"
import Section from '../../components/Section';

function Board() {
    return ( 
    <div>
        <Header title="Board" collapse={true}/>
        <Section children={<People/>}/>
        <Footer />
    </div>
    );
}

export default Board;