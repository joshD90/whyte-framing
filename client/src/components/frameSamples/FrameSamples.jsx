import "./frameSamples.scss";
import React from "react";
import batmanFramed from "../../assets/batmanFramed.png";
import womanFramed from "../../assets/womanFramed.png";
import pic2Framed from "../../assets/pic2Framed.png";

function FrameSamples() {
  const frames = [
    batmanFramed,
    womanFramed,
    pic2Framed,
    batmanFramed,
    womanFramed,
    pic2Framed,
  ];
  return (
    <div className="frameContainer">
      {frames.map((frame) => {
        return (
          <div className="frame">
            <img src={frame} alt="a sample frame" />
          </div>
        );
      })}
    </div>
  );
}

export default FrameSamples;
