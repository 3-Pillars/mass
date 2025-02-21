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
      : <div className="page-body">
      <h1 id="header-text">READY TO MAKE THE CHANGE?</h1>
      <form>

        <div className='form-section'>
          <div className='form-element'>
            <label>NAME </label>
          </div>
          <div className='form-element'>
            <input name="query" />
          </div>
        </div>

        <div className='form-section'>
          <div className='form-element'>
            <label>EMAIL </label>
          </div>
          <div className='form-element'>
            <input name="query" />
          </div>
        </div>
        
        <div className='form-section'>  
          <div className='form-element'>
            <label>INQUIRY</label>
          </div>
          <div className='form-element'>
            <textarea></textarea>
          </div>
        </div>
        
        
        <div id="submit-button" onClick={() => changeSubmitted(true)}>
          <div>BEGIN YOUR JOURNEY</div>
        </div>
      </form>
    </div>
    }
    
    </>
  );
}

export default Contact;