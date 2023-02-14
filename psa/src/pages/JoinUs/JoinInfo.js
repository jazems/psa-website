import React from 'react';
import Accordion from '../../components/Accordion';
import style from "../../styles/JoinUs/JoinInfo.module.css"

function JoinInfo() {
    return (  
    <div className={style.container}>
        <p>Thank you for your interest in joining Cal’s Pakistani Student Association.</p>
        <p className={style.bold}>Intern Program</p>
        <p>Spring 2023 intern recruitment is now closed.</p>
        <p className={style.bold}>Board</p>
        <p>Board recruitment for the 2023-2024 school year will occur at the end of spring 2023.</p>
        <p>Stay in touch via our Instagram <a style={{color: "blue"}}href="https://www.instagram.com/psaucberkeley/" target="_blank">@psaucberkeley</a> for updates.</p>
        
        <div style={{marginTop: "1.5rem"}}>
            <p className={style.title}>Frequently Asked Questions</p>
        <Accordion />
        </div>
    </div>);
}

export default JoinInfo;