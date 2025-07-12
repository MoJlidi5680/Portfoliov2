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
        "service_zh6k6yj",
        "template_k15qdtm",
        form.current,
        "n_7TI25D3LLumAvu9"
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
        <p>I’d love to hear from you—reach out for any opportunities or questions!</p>
      </div>

      <div className="contact-form-container">
        <h3>
          Connect With Me 
        </h3>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="input-field"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
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
