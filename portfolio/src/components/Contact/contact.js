import React, {useRef} from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_8dv1u0d', 'template_tamhdbh', form.current, {
            publicKey: 'bFHGELFz93ssGlfIX',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id="contactPage">
        <h1 className="contactPageTitle">Let's Talk Web Dev!</h1>
        <span className='contactDesc'>Always Learning - Share Your Thoughts! </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail} >
            <input type="text" className="name" placeholder="Name" name="your_name"/>
            <input type="email" className="email" placeholder="Email" name="your_email"/>
            <textarea rows="5" cols="30" name="message" placeholder="Type your message.." className="msg"></textarea>
            <button className="submit-button" type="submit" value="send" >Submit</button>
            
        </form>
    </section>
    
  ); 
}

export default Contact