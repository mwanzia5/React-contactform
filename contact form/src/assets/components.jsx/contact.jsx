import React from 'react'
import Swal from 'sweetalert2'
import './contact.css'
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d2ce11fd-b77a-4b91-a571-7235e9f72687");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success",
                text: "Message Sent Successfully",
                icon: "success"
              });
        }
      };

  return (
    <section className="contact">
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name </label>
            <input type='text' className='field' placeholder='Enter your name ' name='name'required/>
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type='text' className='field' placeholder='Enter your Email'name='email' required/>
          </div>
          <div className="input-box">
            <label>Your Message </label>
            <textarea name='message' className='field mess' placeholder='Write your message here' required/>
          </div>
          <button type='submit'>Send Message</button>
        </form>
    </section>
  )
}

export default Contact;
