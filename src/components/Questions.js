import React from 'react'
import Accordion from './Accordion'
import "../components/Questions.css"

const Questions = (props) => {
  return (
    <div className='questions-container'>

      <h2 className="questions-title">Frequently Asked Questions</h2>
      <p className="questions-paragraph">Here are some of our FAQs. If you have any other questions
       you'd like asnwered please feel free to email us.</p>

       <Accordion title="What is bookmark?" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce tincidunt justo eget ultricies fringilla. 
        Phasellus blandit ipsum quis quam ornare mattis." />

       <Accordion title="How can i request a new browser?"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce tincidunt justo eget ultricies fringilla. 
        Phasellus blandit ipsum quis quam ornare mattis." />

       <Accordion title="Is there a mobile app?"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce tincidunt justo eget ultricies fringilla. 
        Phasellus blandit ipsum quis quam ornare mattis." />

       <Accordion title="What about other Chromium browsers?"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce tincidunt justo eget ultricies fringilla. 
        Phasellus blandit ipsum quis quam ornare mattis." />

        <button className="more-info-button">More Info</button>

       

    </div>
  )
}

export default Questions