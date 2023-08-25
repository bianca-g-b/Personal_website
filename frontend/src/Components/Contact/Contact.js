import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("Submit");
  const [editStatusTimer, setEditStatusTimer] = useState(null);
  const form = useRef();
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const secretKey = process.env.REACT_APP_SECRET_KEY;

  const [formDetails, setFormDetails] = useState({
    from_name: "",
    to_name: "bianca@biancabuha.com",
    from_email: "" ,
    message: "",
  });



  function handleChange(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }
  
  function handleSubmit(e) {
    e.preventDefault()
  
    emailjs.sendForm(serviceId, templateId, form.current, publicKey, secretKey)
      .then((result) => {
          console.log(result.text);
          setStatus("Message Sent");

          if (editStatusTimer) {
            clearTimeout(editStatusTimer);
          }

          const timer = setTimeout(() => {
            setStatus("Submit");
          }, 1500);

          setEditStatusTimer(timer);
          
      } , (error) => {
          console.log(error.text);
      }
    );
  }

  return (
    <form 
    ref={form}
     onSubmit={handleSubmit} 
     className="form-full">
    <div className="form-area">
    <h2 className="contact-form-intro">Use this form to contact me:</h2>
      <div className="form-component">
        <label htmlFor="name">Name</label>
        <input
          type="text" 
          id="name"
          name="from_name"
          placeholders="Your name"
          value = {formDetails.from_name}
          onChange={handleChange}
          required />
      </div>

      <div className="form-component">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="from_email"
          placeholders="Your email address"
          value = {formDetails.from_email}
          onChange={handleChange}
          required />
      </div>

      <div className="form-component">
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message"
          placeholders="Your message"
          value = {formDetails.message}
          onChange={handleChange}
          required />
      </div>

      <button type="submit" className="form-button">{status}</button>
      <p className="email-reference">or send me an email at bianca@biancabuha.com</p>
      </div>
      
    </form>
  );
};

export default Contact;