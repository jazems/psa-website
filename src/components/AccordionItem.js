import React, {useRef} from 'react';
import style from "../styles/AccordionItem.module.css"


function AccordionItem({faq, onToggle, active}) {

    const {question, answer} = faq
    const contentEl = useRef();

    return (
    <li className={`${style.accordion_item}  ${active ? style.active : ""}`}>
        <button className={style.button} onClick={onToggle}>
            {question}
            <span>{active ? '-' : '+'}</span>
        </button>
        <div ref={contentEl} className={style.answer_wrapper} style={active? {height: contentEl.current.scrollHeight}: { height: "0px" }}>
            <div className={style.answer}>
                {answer}
            </div>
        </div>
    </li>
  );
}

export default AccordionItem;