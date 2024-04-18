import React from 'react'
import './contact.css';
const Contact = () => {
  return (
    <section id="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className='contactDesc'>Fill The Form </span>
        <form className="contactForm">
            <input type="text" className="name" placeholder="Your Name"/>
            <input type="email" className="email" placeholder="Your email"/>
            <textarea rows="5" cols="30" name="message" placeholder="message" className="msg"></textarea>
            <button className="submitBtn" type="submit" value="send" >Submit</button>
            <div>
                <img src=" " at=" facebook" className="link" /> 
                <img src=" " at="instagram "className="link" />
            </div>
        </form>
    </section>
    
  ); 
}

export default Contact