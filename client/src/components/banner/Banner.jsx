import "./banner.scss";

import Logo from "../../assets/frameLogo.webp";
import Motto from "../../assets/frameMotto.webp";
import frameBottom from "../../assets/bottom-frame.png";
import frameTop from "../../assets/top-frame.png";
import frameRight from "../../assets/right-frame.png";
import frameLeft from "../../assets/left-frame.png";
import tulip1 from "../../assets/tulip-1.png";
import rose from "../../assets/whiteRose.png";
import Contact from "../contact/Contact";

function Banner() {
  return (
    <div className="bannerContainer">
      <img className="whiteRose" src={rose} alt="white rose" />
      <img className="tulip" src={tulip1} alt="white tuplip" />
      <img className="frame-piece-top" src={frameTop} alt="frame border" />
      <img className="frame-piece-right" src={frameRight} alt="frame border" />
      <img className="frame-piece-left" src={frameLeft} alt="frame border" />
      <img
        className="frame-piece-bottom"
        src={frameBottom}
        alt="frame border"
      />

      <img className="logo" src={Logo} alt="logo img" />
      <img className="motto" src={Motto} alt="motto img" />
      <Contact />
    </div>
  );
}

export default Banner;
