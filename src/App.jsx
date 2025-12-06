import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Other2 from './components/Other2';
import ScrollToHash from './components/ScrollToHash';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const items = [
    {
      label: "عن الشركة",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "#" },
        { label: "Careers", ariaLabel: "About Careers", href: "#" }
      ]
    },
    {
      label: "منتجاتنا",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Products", href: "#" },
        { label: "Case Studies", ariaLabel: "Product Case Studies", href: "#" }
      ]
    },
    {
      label: "تواصل معنا",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:info@albayoumi.com" },
        { label: "Twitter", ariaLabel: "Twitter", href: "#" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" }
      ]
    }
  ];
  return (
    <>
      <ScrollToHash/>
      <Header />
      

      <Routes>

       
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Products />
              
            </>
          }
        />

       
        <Route path="/about" element={
          <>
          <Hero/>
          <About />
          <Other2/>
          
      </>
      
      } />

        <Route path="/Products" element={
          <>
           <Hero />
          <Products/>
          
           </>} />
        <Route path="/contact" element={
          <>
           <Hero />
          <Contact/>
          
           </>} />

      </Routes>
      <Footer/>
    </>
  );
};

export default App;