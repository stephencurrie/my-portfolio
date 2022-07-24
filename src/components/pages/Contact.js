import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };


  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email is not valid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;


      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }


    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');

  };

  return (
    <div className="content">
      <h1>Contact Page</h1>
      <form>
        <div className="form-group">
      Name
        <input className="form-control"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          // placeholder="name"
        />
        </div>

        <p></p>
        Email
        <input className="form-control"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          // placeholder="email"
        />
        <p></p>
        Message
        <textarea className="form-control"
        rows="5"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          // placeholder="message"
        />
        <p></p>
        <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
