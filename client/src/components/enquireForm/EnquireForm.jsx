import "./enquireForm.scss";

import React from "react";

function EnquireForm() {
  return (
    <div className="enquireContainer">
      <form>
        <div className="inputDiv">
          <label for="name">Name</label>
          <input type="text" name="name" placeholder="Enter name here" />
        </div>
        <div className="inputDiv">
          <label for="contact">Contact</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter email or phone number here"
          />
        </div>
        <div className="inputDiv">
          <label for="contact">Message</label>
          <textarea
            className="message"
            type="text"
            name="contact"
            placeholder="Enter a brief enquiry here"
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default EnquireForm;
