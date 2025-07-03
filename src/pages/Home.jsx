import React from "react";
import Hero from "../components/hero";
import WorkingProcess from "../components/workingProcess";
import Services from "../components/services";
import Sliders from "../components/sliders";
import Discount from "../components/discount";
import HowItWorks from "../components/howitworks";
import BehindTheScene from "../components/behindtheScene";

const Home = () => {
  return (
    <>
      <Hero />
      <WorkingProcess />
      <BehindTheScene />
      <Services />
      <Sliders />
      <Discount />
      <HowItWorks />
    </>
  );
};

export default Home;
