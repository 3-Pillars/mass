'use strict'
import React, {useState, useRef} from 'react';
import '../../../public/contact.css'
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();
  let submitted = false

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_97dfvlh', 'template_rzio7df', form.current, {
        publicKey: 'oeWLvWfMOyycOBeUE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          console.log(error)
        },
      );
  };

  return (
    <>
    {
      submitted 
      ? <div id="confirmation">
          <h1>Thanks for reaching out to us! We will review your case and get back to you as soon as possible</h1>
        </div>
      : <div className="page-body">
      <h1 id="header-text">READY TO MAKE THE CHANGE?</h1>
      <form ref={form} onSubmit={sendEmail}>

        <div className='form-section'>
          <div className='form-element'>
            <label>NAME </label>
          </div>
          <div className='form-element'>
            <input type="text" name="user_name" />
          </div>
        </div>

        <div className='form-section'>
          <div className='form-element'>
            <label>EMAIL </label>
          </div>
          <div className='form-element'>
            <input type="email" name="user_email" />
          </div>
        </div>
        
        <div className='form-section'>  
          <div className='form-element'>
            <label>INQUIRY</label>
          </div>
          <div className='form-element'>
            <textarea name="inquiry" />
          </div>
        </div>
        <div id="submit-button">
          <input id="submit-input" type="submit" value="Send" />
        </div>
        

        {/* <div id="submit-button" onClick={sendEmail}>
          <div>BEGIN YOUR JOURNEY</div>
        </div> */}
      </form>
    </div>
    }

    {/* <form ref={form} onSubmit={sendEmail}> */}
    {/* <form ref={form} onSubmit={() => {console.log('hello there scum')}}> */}
      {/* <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
    
    </>
  );
}

export default Contact;