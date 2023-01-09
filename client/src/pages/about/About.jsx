import "./about.scss";
import "../../components/banner/banner.scss";
import frameBottom from "../../assets/bottom-frame.png";
import frameTop from "../../assets/top-frame.png";
import frameRight from "../../assets/right-frame.png";
import frameLeft from "../../assets/left-frame.png";
import profile from "../../assets/thomas_whyte.jpg";

import React from "react";

function About() {
  return (
    <div className="bannerContainer aboutContainer">
      <img className="frame-piece-top" src={frameTop} alt="frame border" />
      <img className="frame-piece-right" src={frameRight} alt="frame border" />
      <img className="frame-piece-left" src={frameLeft} alt="frame border" />
      <img
        className="frame-piece-bottom"
        src={frameBottom}
        alt="frame border"
      />
      <img src={profile} alt="profile" className="profileImg" />
      <div className="profileExerpt">
        <div className="ellipse"></div>
        <p>
          <em>Hi,</em> I’m Thomas and its my passion to capture your memories in
          a casual, modern and natural way.
          <p>
            When you love what you do and are passionate it is a match made in
            heaven and my vision is then created with fun, love and laughter as
            that’s what it is all about.
          </p>
          <p> Let me create that vision with you and let the journey begin….</p>
        </p>
      </div>
    </div>
  );
}

export default About;
