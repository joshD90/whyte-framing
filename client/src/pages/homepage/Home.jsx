import React from "react";
import "./home.scss";
import Background from "../../components/background/Background";
import Banner from "../../components/banner/Banner";
import FrameSamples from "../../components/frameSamples/FrameSamples";
import SpinningAttr from "../../components/spinningAttr/SpinningAttr";

function Home() {
  return (
    <div>
      <Background />
      <Banner />
      <FrameSamples />
      <SpinningAttr />
    </div>
  );
}

export default Home;
