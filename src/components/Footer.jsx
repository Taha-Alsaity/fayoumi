import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-section">
          <h2 className="footer-title">شركة فيومي</h2>
          <p className="footer-text">
            شركة متخصصة في تصنيع الأعلاف الحيوانية بأعلى معايير الجودة.
            رؤيتنا هي تقديم منتجات مبتكرة تدعم قطاع الثروة الحيوانية.
          </p>
        </div>

      
        <div className="footer-section">
          <h2 className="footer-title">تواصل معنا</h2>
          <p className="footer-text">📍البركات, مسلاتة - ليبيا </p>
          <p dir="rtl" id="num" className="footer-text">📞 <nav><span>+218 92 443 7520</span>   <span>+218 91 366 0426</span> </nav> </p>
          
          
          <p className="footer-text">✉ Contact@fayoumi.ly</p>
        </div>

      
        <div className="footer-section">
          <h2 className="footer-title">موقع الشركة</h2>
          <div className="map-container">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.226123427999!2d14.0389157!3d32.4666431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a671ac0fc21e07%3A0x9e3fe5d3edefbda4!2z2LTYsdmD2Kkg2YHZitmI2YXZiiDZhNi12YbYp9i52Kkg2KfZhNin2LnZhNin2YE!5e0!3m2!1sar!2sly!4v1765028209338!5m2!1sar!2sly"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        ©{new Date().getFullYear() } جميع الحقوق محفوظة لشركة فيومي.
      </div>
    </footer>
  );
};

export default Footer;
