'use strict'
import React, {useState} from 'react';
import '../../../public/contact.css'


function Contact() {

  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

  const [submitted, changeSubmitted] = useState(false)

  return (
    <>
    <div id="contact-container">
      <h1 id="header-text">Ready to make a change?</h1>
      <h1>We can help!</h1>
      <form action={search}>

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
          <div>Begin your</div><div>journey</div>
        </div>
      </form>
      {submitted ? <h1>Submitted!</h1> : null}
    </div>
    </>
  );
}

export default Contact;