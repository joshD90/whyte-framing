import React from "react";
import "./home.scss";
import Background from "../../components/background/Background";
import Banner from "../../components/banner/Banner";
import FrameSamples from "../../components/frameSamples/FrameSamples";
import SpinningAttr from "../../components/spinningAttr/SpinningAttr";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
//All elements of the Home page located at "/"
function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", position: "relative" }}>
      <Background />
      <Navbar />
      <Banner />
      <FrameSamples />
      <SpinningAttr />
      <Footer />
    </div>
  );
}

export default Home;
