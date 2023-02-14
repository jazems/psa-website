import React from 'react';
import style from "../../styles/JoinUs/JoinInfo.module.css"

function ContactInfo() {
    return (  
    <div className={style.container}>
        <p>For all inquiries, please email <span style={{color: "blue"}}>saeednaeem@berkeley.edu</span></p>
        <p>Please visit our <span className={style.bold}><a style={{color: "blue"}} href="https://linktr.ee/CalPsa" target="_blank">LinkTree</a></span> for latest news, fundraisers, applications, sign-up sheets and other relevant information.</p>
        <p><span className={style.bold}>Facebook</span>: <a style={{color: "blue"}}href="https://www.facebook.com/berkeleypsa" target="_blank">Cal Pakistani Students Association</a></p>
        <p><span className={style.bold}>Instagram</span>: <a style={{color: "blue"}}href="https://www.instagram.com/psaucberkeley/" target="_blank">@psaucberkeley</a></p>
        <p><span className={style.bold}>Tiktok</span>: <a style={{color: "blue"}}href="https://www.tiktok.com/@psaucberkeley" target="_blank">@psaucberkeley</a></p>
    </div>);
}

export default ContactInfo;