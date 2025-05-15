import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick link</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQs and Help</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <img src="/images/location.png" className="icon-img" alt="Location" />
            123 Street, Kolkata, India
            </p>
            <p>
            <img src="/images/phone-icon.png" alt="Phone Icon" className="icon1" />
            +91 9875994510
          </p>
          <p>✉️ info@example.com</p>
        </div>

        {/* Gallery Section */}
        <div className="footer-section gallery">
          <h3>Gallery</h3>
          <div className="gallery-images">
            <img src="/images/gallery1.png" alt="Gallery 1" />
            <img src="/images/gallery2.png" alt="Gallery 2" />
            <img src="/images/gallery3.png" alt="Gallery 3" />
            <img src="/images/gallery4.png" alt="Gallery 4" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© Copyright MockMetaAI. All Rights Reserved.</p>
        <p>Designed by Dipanwita Patra, Najni Fatima, Sayari Jana, Suchana Giri</p>
      </div>
    </footer>
  );
};

export default Footer;
