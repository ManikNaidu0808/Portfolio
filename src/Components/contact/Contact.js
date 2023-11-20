import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_cwhlm99", "template_6rrcmp9", form.current, "Jh9dBayS_HSWIkiG3").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h6>tmaniknaidu0808@gmail.com</h6>
            <a href="mailto:dummy@gmail.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className="contact_option-icon" />
            <h4>Linkedln</h4>
            <a href="https://www.linkedin.com/in/manik-naidu-6078b1162/" target="_blank" rel="noopener noreferrer">
              Connect with Me
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <a href="http://wa.me/+917587475095">Ping me</a>
          </article>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder="Your Full Name" required />
          <input type="email" name="email" id="" placeholder="Your Email" required />
          <textarea name="message" id="" rows="10" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
