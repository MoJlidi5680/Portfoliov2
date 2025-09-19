import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fm7wcoa",     
        "template_qn5d9vs",     
        form.current,
        "JA-Q5dFUjimfFHIhs"    
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <ToastContainer />

      <div className="contact-header">
        <h2>CONTACT</h2>
        <div className="underline"></div>
        <p>Contact me to collaborate on projects or discuss opportunities.</p>
      </div>

      <div className="contact-form-container">
        <h3>Connect With Me</h3>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"      
            placeholder="Your Name"
            required
            className="input-field"
          />
          <input
            type="email"
            name="from_email"      
            placeholder="Your Email"
            required
            className="input-field"
          />
          <input
            type="text"
            name="subject"        
            placeholder="Subject"
            required
            className="input-field"
          />
          <textarea
            name="message"         
            placeholder="Message"
            rows="4"
            required
            className="input-field textarea-field"
          />

          <button type="submit" className="btn-send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
