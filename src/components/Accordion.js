import React, {useState, useRef } from 'react'
import "../components/Accordion.css"

const Accordion = (props) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon")

    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate")
    }

  return (
    <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">{props.title}</p>
          <svg className={`${setRotate}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512" 
                    width={10} 
                    fill={setActive === 'active' ? 'red' : 'blue'}>
                        <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/>
                    </svg>
        </button>
        <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion__content">
          <div
          classname="accordion__text"
          dangerouslySetInnerHTML = {{ __html: props.content}} />
        </div>
       </div>
  )
}

export default Accordion