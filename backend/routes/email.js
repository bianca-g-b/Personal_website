import express from "express";
import nodemailer from 'nodemailer';
export const Router = express.Router();

// Set env variables
const emailAdress = process.env.REACT_APP_EMAIL_ADDRESS;
const password = process.env.REACT_APP_PASSWORD;

// set contact Email variable and verify it is working
const contactEmail = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: emailAdress,
      pass: password,
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });



// Make a post request to send email
Router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 

    const mail = {
      from: emailAdress,
      to: emailAdress,
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: `ERROR: ${error}` });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });