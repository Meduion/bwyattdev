import './ContactFormStyles.css';
import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

const ContactForm = () => {
  // Following format from here: https://webtips.dev/solutions/get-form-values-on-submit-in-react
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });

    // clear any error messages when the user starts typing again
    setErrors({});
  };

  // Following drawn from here: https://legacy.reactjs.org/docs/events.html
  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value) {
      setErrors({
        ...errors,
        [`${name}Error`]: `Please fill in the ${name} field.`
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = isEmail(data.email) ? null : "Please enter a valid email address.";
    const errors = { emailError };

    // Check if any of the fields are empty
    if (!data.name || !data.email || !data.subject || !data.message) {
      setErrors({ formError: "Please fill in all form fields." });
      return;
    }

    if (!errors.emailError) {
      // submit the form data to the server
      console.log(data);

      // clear the form by resetting the state
      setData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      // clear any error messages
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className='form'>
      {errors.formError && <p className='error'>{errors.formError}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' name='name' value={data.name} onChange={updateData} onBlur={handleBlur}></input>
        {errors.nameError && <p className='error'>{errors.nameError}</p>}
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' value={data.email} onChange={updateData} onBlur={handleBlur}></input>
        {errors.emailError && <p className='error'>{errors.emailError}</p>}
        <label htmlFor='subject'>Subject</label>
        <input type='text' id='subject' name='subject' value={data.subject} onChange={updateData} onBlur={handleBlur}></input>
        {errors.subjectError && <p className='error'>{errors.subjectError}</p>}
        <label htmlFor='message'>Message</label>
        <textarea rows='6' id='message' name='message' value={data.message} onChange={updateData} onBlur={handleBlur}></textarea>
        {errors.messageError && <p className='error'>{errors.messageError}</p>}
        <div className='divbtn'>
          <button className='btn'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;