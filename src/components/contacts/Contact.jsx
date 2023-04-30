import React from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

const emailjsServices = {
  serviceId: "service_mzo66i4",
  templateId: "template_vpqxnsb",
  publicKey: "yYfJk-sjA6DR2ipqx",
};
    emailjs
      .sendForm(
        emailjsServices.serviceId,
        emailjsServices.templateId,
        form.current,
        emailjsServices.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>osayifestus25@outlook.com</h5>
            <a href="mailto:osayifestus25@outlook.com" target="_blank">
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Festus Osayi</h5>
            <a href="https://m.me/Festus_Osayi29" target="_blank">
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>phone</h5>
            <a
              href="https://api.whatsapp.com/send?phone=14372166863"
              target="_blank"
            >
              Send Message
            </a>
          </article>
        </div>

        {/* end of contacts options */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
