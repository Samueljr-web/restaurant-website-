import React from "react";
import '../styles/contact.css';
import Button from "../components/Button";

const contact = () => {
  return (
  <div>
    <div className="contact-container">
      <h1>GET IN TOUCH</h1>
      <p>You have any questions? We would love to hear from you!</p>
      <p>You have a piece of advice or a suggestion that you will like to share with us? Feel free to contact us!</p>
      <div>
          <textarea>Name</textarea>
      </div>
      <div>
          <textarea>Email</textarea>
      </div>
      <div>
          <textarea>Subject</textarea>
      </div>
      <div>
          <textarea>Message</textarea>
      </div>
    </div> 
    <Button name={'Send Message'}/>
    <div className="contact-container">
      <h1>FIND US</h1>
      <tr>
        <li>Address: Ikeja Lagos</li>
        <li>Phone: +234 813 284 2345</li>
        <li>Email: sidehustle29@gmail.com</li>
      </tr>
    </div>

 </div>
  );
};

export default contact;
