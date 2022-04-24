import React from "react";
import "../styles/button.css";

const Button = ({ name }) => {
  return (
    <div>
      <button className="button slideleft">{name}</button>
    </div>
  );
};
Button.defaultProps = { name: "Contact" };

export default Button;
