import React from 'react'

const ContactInput = ({contactInput}) => {
    const {label, title, type}= contactInput
  return (
    <div className="form-group">
      <label htmlFor={label}>{title}</label>
      <input  className="input" type={type} />
    </div>
  );
}

export default ContactInput