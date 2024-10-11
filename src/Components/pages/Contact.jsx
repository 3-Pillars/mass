'use strict'
import '../../../public/contact.css'

function Contact() {

  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

  return (
    <>
    <div id="contact-container">
      <h1 id="header-text">Ready to make a change?</h1>
      <h1>We can help!</h1>
      <form action={search}>
        <div>
          <label>Name: </label>
        </div>
        <div>
          <input name="query" />
        </div>
        <div>
          <label>Email: </label>
        </div>
        <div>
          <input name="query" />
        </div>
        <div>
          <label>Briefly tell us how we can help you</label>
        </div>
        <div>
          <textarea></textarea>
        </div>
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
    </>
  );
}

export default Contact;