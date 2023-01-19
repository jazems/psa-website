import React from 'react';
import style from "../../styles/JoinUs/JoinInfo.module.css"

function JoinInfo() {
    return (  
    <div className={style.container}>
        <p>Thank you for your interest in joining Cal’s Pakistani Student Association.</p>
        <p className={style.bold}>Intern Program</p>
        <p>Spring 2023 recruitment will occur at the beginning of spring semester.</p>
        <p className={style.bold}>Board</p>
        <p>Board recruitment for the 2023-2024 school year will occur at the end of spring 2023.</p>
        <p>Stay in touch via our Instagram <a style={{color: "blue"}}href="https://www.instagram.com/psaucberkeley/" target="_blank">@psaucberkeley</a> for updates.</p>
    </div>);
}

export default JoinInfo;