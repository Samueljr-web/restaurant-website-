import React from 'react'

const ContactInfo = ({ contactInfo }) => {
    const {title , subtitle, details}= contactInfo
  return (
    <div className="restaurant-info">
      <h2 className="info-title">{title}</h2>
          <p>{subtitle}</p>
          <p>{details}</p>
    </div>
  );
}

export default ContactInfo