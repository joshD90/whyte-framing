import "./spinningAttr.scss";
import React from "react";
import FrameSpinner from "./FrameSpinner";
import silverCorner from "../../assets/frame-corner-silver.png";
import goldCorner from "../../assets/frame-corner-gold.png";
import beigeCorner from "../../assets/frame-corner-beige.png";

function SpinningAttr() {
  return (
    <div className="spinningContainer">
      <FrameSpinner
        corner={silverCorner}
        direction="right"
        text="High Quality Materials"
      />
      <hr className="spinnerHr" />
      <FrameSpinner
        corner={goldCorner}
        direction="left"
        text="Wide Range Of Designs"
      />
      <hr className="spinnerHr" />
      <FrameSpinner
        corner={beigeCorner}
        direction="right"
        text="You Got It, We Can Frame It"
      />
      <hr className="spinnerHr" />
    </div>
  );
}

export default SpinningAttr;
