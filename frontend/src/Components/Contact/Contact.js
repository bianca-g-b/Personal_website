import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} className="form-full">
    <div className="form-area">
    <h2 className="contact-form-intro">Use this form to contact me:</h2>
      <div className="form-component">
      
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>
      <div className="form-component">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-component">
        <label htmlFor="message">Message</label>
        <textarea id="message" required />
      </div>
      <button type="submit" className="form-button">{status}</button>
      <h4 className="email-reference">or send me an email at bianca@biancabuha.com</h4>
      </div>
      
    </form>
  );
};

export default Contact;