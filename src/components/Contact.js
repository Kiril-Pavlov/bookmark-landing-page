import React, { useState } from 'react'
import "../components/Contact.css"

const Contact = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regEx.test(email)) {
      setMessage("")
    } else if (!regEx.test(email) && email != "") {
      setMessage("Whoops, make sure it's an email")
    } else {
      setMessage("")
    }
  };
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className='contact-container'>
      <h4 className='contact-subtitle'>35,000+ ALREADY JOINED</h4>
      <h2 className='contact-title'>Stay up-to-date with what we're doing</h2>
      <div className='contact-input-button'>
        <div className='input-message'>
          <input type="email" className='contact-input' value={email} onChange={handleOnChange} placeholder='Enter your email address' />
         <p className='error-message'>{message}</p> 
        </div>
        <button className='contact-button' onClick={emailValidation}>Contact Us</button>
      </div>
    </div>
  )
}

export default Contact;