import "./frameSpinner.scss";
import React, { useEffect, useRef } from "react";

//this looks after the individual segments of frame corners spinning
function FrameSpinner({ corner, direction, text }) {
  const cornerRef = useRef();
  //set the animation up in a useEffect
  useEffect(() => {
    //get the y value of container and get the difference from the height the window has been scrolled, divide by 10 to slow rotation down
    const doRotate = () => {
      cornerRef.current.style.transform = `rotate(${
        (cornerRef.current.getBoundingClientRect().y - window.scrollY) / 10
      }deg)`;
    };
    //listen for our scroll and clear event listener
    window.addEventListener("scroll", doRotate);
    return () => window.removeEventListener("scroll", doRotate);
  }, []);

  return (
    <div className="cornerContainer">
      <div className="insetSquare">
        <p>{text}</p>
        <img
          src={corner}
          alt="frame corner"
          ref={cornerRef}
          className="cornerImg"
        />
      </div>
    </div>
  );
}

export default FrameSpinner;

//useEffect(() => {
//     const doRotate = () => {
//       anime({
//         targets: ".cornerImg",
//         rotate: () => whichDirection,
//         duration: 10000,
//         loop: true,
//         easing: "linear",
//       });
//     };
//     doRotate();
//   }, []);
