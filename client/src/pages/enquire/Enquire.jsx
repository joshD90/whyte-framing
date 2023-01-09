import "./enquire.scss";
import "../../components/banner/banner.scss";
import frameBottom from "../../assets/bottom-frame.png";
import frameTop from "../../assets/top-frame.png";
import frameRight from "../../assets/right-frame.png";
import frameLeft from "../../assets/left-frame.png";
import EnquireForm from "../../components/enquireForm/EnquireForm";
import React from "react";

function Enquire() {
  return (
    <div className="bannerContainer enquireBanner">
      <img className="frame-piece-top" src={frameTop} alt="frame border" />
      <img className="frame-piece-right" src={frameRight} alt="frame border" />
      <img className="frame-piece-left" src={frameLeft} alt="frame border" />
      <img
        className="frame-piece-bottom"
        src={frameBottom}
        alt="frame border"
      />
      <h1>MAKE AN ENQUIRY</h1>
      <EnquireForm />
    </div>
  );
}

export default Enquire;
