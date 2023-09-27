// Contact.js
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white flex justify-center items-center p-4 pt-8"
    >
      <div className="text-center">

        <h2 className="text-5xl p-7 text-brown">
          CONTACT
        </h2>

        <div className="text-2xl text-brown hover:text-beige  my-4">
          <a href="mailto:antoninrudoni@gmail.com" className="mail-button">
            antoninrudoni@gmail.com
          </a>
        </div>
        <div className="text-2xl text-brown hover:text-beige  my-4">
          <a href="tel:+33787642623" className="phone-button">
            +33 7 87 64 26 23
          </a>
        </div>
        <div className="social-icons mt-6 flex justify-center space-x-4 pb-6">
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} className="text-brown hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} className="text-brown hover:text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};
