import React from "react";
import "../styles/contact.css";
import Map from "../assets/map.PNG";
import Button from "../components/Button";
import { contactInfo, contactInput } from "../staticData/contactData";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactInput from "../components/Contact/ContactInput";

const contact = () => {
  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-container">
          <h1 className="form-title">GET IN TOUCH</h1>
          <p className="form-subheader">
            You have any questions? We would love to hear from you! You have a
            piece of advice or a suggestion that you will like to share with us?
            Feel free to contact us!
          </p>
          <form action="">
            {contactInput.map((Input, index) => (
              <ContactInput key={index} contactInput={Input} />
            ))}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea></textarea>
            </div>
            <Button name={"Send Message"} />
          </form>
        </div>
        <div className="contact-container">
          <h1 className="form-title find-us">FIND US</h1>
          <ul className="address">
            <li>Address: Ikeja Lagos</li>
            <li>Phone: +234 813 284 2345</li>
            <li>Email: sidehustle29@gmail.com</li>
          </ul>
          <img className="map" src={Map} alt="map" />
        </div>
      </div>
      <div className="restaurant-info-container">
        {contactInfo.map((contact, index) => (
          <ContactInfo key={index} contactInfo={contact} />
        ))}
      </div>
    </>
  );
};

export default contact;
