import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Features from "../../Components/Features/Features";
import FirstUniqueSellingPoint from "../../Components/FirstUniqueSellingPoint/FirstUniqueSellingPoint";
import SecondUniqueSellingPoint from "../../Components/SecondUniqueSellingPoint/SecondUniqueSellingPoint";
import Testimonials from "../../Components/Testimonials/Testimonials";
import FooterTop from "../../Components/FooterTop/FooterTop";
import FooterBottom from "../../Components/FooterBottom/FooterBottom";

function Landing() {
  return (
    <>
      <div className="first__section">
        <Header />
        <Hero />
        <Features />
      </div>
      <div className="second__section">
        <FirstUniqueSellingPoint />
        <SecondUniqueSellingPoint />
        <Testimonials />
      </div>
      <div className="third-section">
        <FooterTop />
      </div>
      <div className="fourth-section">
        <FooterBottom />
      </div>
    </>
  );
}

export default Landing;
