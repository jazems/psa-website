import React, {useState} from 'react';
import AccordionItem from './AccordionItem';
import { faqs } from '../assets/faq_data';
import style from "../styles/Accordion.module.css"

function Accordion() {

    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
         return setClicked("0");
        }
        setClicked(index);
       };
    
    return (     
    <ul className={style.accordion}>
        {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} onToggle={() => handleToggle(index)} active={clicked === index}/>
        ))}
  </ul>);
}

export default Accordion;