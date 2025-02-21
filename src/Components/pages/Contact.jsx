'use strict'
import React, {useState} from 'react';
import '../../../public/contact.css'


function Contact() {

  const [submitted, changeSubmitted] = useState(false)

  return (
    <>
    {
      submitted 
      ? <div id="confirmation">
          <h1>Thanks for reaching out to us! We will review your case and get back to you as soon as possible</h1>
        </div>
      : <div id="contact-container">
      <h1 id="header-text">Ready to make a change?</h1>
      <form>

        <div className='form-section'>
          <div className='form-element'>
            <label>Name: </label>
          </div>
          <div className='form-element'>
            <input name="query" />
          </div>
        </div>

        <div className='form-section'>
          <div className='form-element'>
            <label>Email: </label>
          </div>
          <div className='form-element'>
            <input name="query" />
          </div>
        </div>
        
        <div className='form-section'>  
          <div className='form-element'>
            <label>Briefly tell us how we can help you</label>
          </div>
          <div className='form-element'>
            <textarea></textarea>
          </div>
        </div>
        
        
        <div id="submit-button" onClick={() => changeSubmitted(true)}>
          <div>BEGIN YOUR</div><div>JOURNEY</div>
        </div>
      </form>
    </div>
    }
    
    </>
  );
}

export default Contact;