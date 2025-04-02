import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section className="contact">
        <form action="">
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name </label>
            <input type='text' className='field' placeholder='Enter your name ' required/>
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type='text' className='field' placeholder='Enter your Email ' required/>
          </div>
          <div className="input-box">
            <label>Your Message </label>
            <textarea name='' id=''className='field mess' placeholder='Write your message here' required/>
          </div>
          <button type='submit'>Send Message</button>
        </form>
    </section>
  )
}

export default Contact;
