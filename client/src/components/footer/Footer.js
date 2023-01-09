import "./footer.scss";

import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="openingDiv">
        <span style={{ color: "white" }}>Opening Hours</span>
        <ul>
          <li>
            <span>Mon: </span>
            <span>09:00 - 17:00</span>
          </li>
          <li>
            <span>Tue: </span>
            <span>09:00 - 17:00</span>
          </li>
          <li>
            <span>Wed: </span>
            <span>09:00 - 17:00</span>
          </li>
          <li>
            <span>Thu: </span>
            <span>09:00 - 17:00</span>
          </li>
          <li>
            <span>Fri: </span>
            <span>09:00 - 17:00</span>
          </li>
          <li>
            <span>Sat: </span>
            <span>09:00 - 17:00</span>
          </li>
          <li>
            <span>Sun: </span>
            <span>09:00 - 17:00</span>
          </li>
        </ul>
      </div>
      <div className="socialMediaDiv"></div>
      <div className="openingDiv">
        <ul>
          <li>
            <span>email:</span>
            <span>thomaswhyte@whytemedia.come</span>
          </li>
          <li>
            <span>phone:</span>
            <span>086 1234567</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
