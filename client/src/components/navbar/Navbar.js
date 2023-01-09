import "./navbar.scss";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [dropped, setDropped] = useState(false);
  const [height, setHeight] = useState(0);
  const [screenSmall, setScreenSmall] = useState(
    window.innerWidth < 768 ? true : false
  );
  //when the burger bar is clicked
  const doDrop = (e) => {
    dropped ? setDropped(false) : setDropped(true);
  };
  //only adjust when drop has been changed
  useEffect(() => {
    if (dropped) {
      setHeight("100vh");
    }
    if (!dropped) {
      screenSmall ? setHeight("0") : setHeight("3rem");
    }
  }, [dropped, screenSmall]);
  //set up listener for when screen is changed
  useEffect(() => {
    const isWindowSmall = () => {
      if (window.innerWidth < 768) return setScreenSmall(true);
      setScreenSmall(false);
      setDropped(false);
    };
    window.addEventListener("resize", isWindowSmall);
    //return clear listener to avoid build up
    return () => window.removeEventListener("resize", isWindowSmall);
  });
  return (
    <div className="navContainer">
      <ul style={{ height: height }}>
        <li>Contact</li>
        <li>Frame Options</li>
        <li>Services</li>
      </ul>

      <div className="burgerDiv" onClick={doDrop}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default Navbar;
