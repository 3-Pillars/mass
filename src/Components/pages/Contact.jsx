'use strict'
import React, {useState, useRef} from 'react';
import '../../../public/contact.css'
import emailjs from '@emailjs/browser';


function Contact() {

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    inquiry: ""
  })

  const handleInputChange = (e) => {
    const {name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value}))
  }

  let isFormComplete = formData.user_email && formData.user_name && formData.inquiry

  

  const form = useRef();
  let submitted = false

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e)

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
            <input type="text" name="user_name" value={formData.user_name} onChange={handleInputChange}/>
          </div>
        </div>

        <div className='form-section'>
          <div className='form-element'>
            <label>EMAIL </label>
          </div>
          <div className='form-element'>
            <input type="email" name="user_email" value={formData.user_email} onChange={handleInputChange}/>
          </div>
        </div>
        
        <div className='form-section'>  
          <div className='form-element'>
            <label>INQUIRY</label>
          </div>
          <div className='form-element'>
            <textarea name="inquiry" value={formData.user_inquiry} onChange={handleInputChange}/>
          </div>
        </div>
        <div id={isFormComplete ? 'submit-button-ready' : 'submit-button-not-ready'} onClick={isFormComplete ? sendEmail: null}>
          <input id="submit-input" disabled={!isFormComplete} type="submit"value="BEGIN YOUR JOURNEY" />
        </div>
      </form>
    </div>
    }    
    </>
  );
}

export default Contact;