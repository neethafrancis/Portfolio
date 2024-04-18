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
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className='contactDesc'>Fill The Form </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail} >
            <input type="text" className="name" placeholder="Your Name" name="your_name"/>
            <input type="email" className="email" placeholder="Your email" name="your_email"/>
            <textarea rows="5" cols="30" name="message" placeholder="message" className="msg"></textarea>
            <button className="submitBtn" type="submit" value="send" >Submit</button>
            
        </form>
    </section>
    
  ); 
}

export default Contact