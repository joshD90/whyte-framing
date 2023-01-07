import "./banner.scss";
import React from "react";
import Logo from "../../assets/frameLogo.webp";
import Motto from "../../assets/frameMotto.webp";
import frameBottom from "../../assets/bottom-frame.png";
import frameTop from "../../assets/top-frame.png";
import frameRight from "../../assets/right-frame.png";
import frameLeft from "../../assets/left-frame.png";

function Banner() {
  return (
    <div className="bannerContainer">
      <img className="frame-piece-top" src={frameTop} />
      <img className="frame-piece-right" src={frameRight} />
      <img className="frame-piece-left" src={frameLeft} />
      <img className="frame-piece-bottom" src={frameBottom} />
      <img className="logo" src={Logo} />
      <img className="motto" src={Motto} />
    </div>
  );
}

export default Banner;
