import React from 'react'

const ContactInput = ({contactInput}) => {
    const {label, title, type}= contactInput
  return (
    <div class="form-group">
      <label for={label}>{title}</label>
      <input type={type} />
    </div>
  );
}

export default ContactInput