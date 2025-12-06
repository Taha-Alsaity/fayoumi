import React from "react";
import "./Hero.css";
import HeroHeadline from "./HeroHeadline";
import { Link } from "react-router-dom";
import SimpleSlider from "./SimpleSlider";

const Hero = () => {
  return (
    <section className="hero">
      <div className="section-overlay"></div>


      <div className="container">
        <div className="row">
          <div id="main-text" className="col-lg-6 col-12 mb-5 mb-lg-0">
            <h2 className="text-white">مرحبا بكم في الموقع الخاص </h2>

            
            <HeroHeadline />

            <div className="custom-btn-group"><nav>
              <Link to="/about#about" className="btn custom-btn smoothscroll me-3">
                 من نحن
              </Link></nav>
            <nav>
              <p href="#section_3" className="link smoothscroll">
                لمعرفة كل ما يتعلق بشركة فيومي
              </p></nav>
            </div>
          </div>
         <div className="divdiv">
         <SimpleSlider/>
         <nav>
              <Link to="/products#product" id="btn2" className="btn2 custom-btn smoothscroll me-3">
                تصفح منتجاتنا
              </Link></nav>
              </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
