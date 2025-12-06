import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("جاري الإرسال...");

    emailjs
      .sendForm(
        "service_dcyf3bb",
        "template_xmlliwd",
        e.target,
        "hWboyOPeOWFC5Qn8_"
      )
      .then(
        () => {
          setStatus("تم إرسال الرسالة بنجاح!");
          e.target.reset();
        },
        () => {
          setStatus("حدث خطأ، حاول مرة أخرى.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>تواصل معنا</h2>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="info-card">
          <FaPhoneAlt />
          <p  dir="ltr">+ 218 92 443 7520 </p>
        </div>

        <div className="info-card">
          <FaEnvelope />
          <p>Contact@fayoumi.ly</p>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt />
          <p>البركات, مسلاتة - ليبيا</p>
        </div>
      </div>



      <div className="div-form">
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="اسمك" required />
        <input type="email" name="email" placeholder="بريدك الإلكتروني" required />
        <textarea name="message" placeholder="اكتب رسالتك هنا..." required></textarea>
        <button type="submit">إرسال</button>
      </form>
</div> 
{status && <p className="status-message">{status}</p>}
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/218924437520" 
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp /> واتساب
      </a>

     
    </section>
  );
};

export default Contact;
