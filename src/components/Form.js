import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
  <div className="form">
    <form>
        <input placeholder="Your Name" type="text"></input> <br></br>
        <input placeholder="Email" type="email"></input> <br></br>
        <input placeholder="Subject" type="text"></input> <br></br>
        <textarea rows="6" placeholder="Type your messeages here" />
        <button className="btn">Submit</button>
    </form>
  </div>
  );
};

export default Form;