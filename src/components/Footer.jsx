import React from "react";
import "../styles/Footer.css";
import "../../images/iteration-2-images/footer/icons/icon-1.png";
import "../../images/iteration-2-images/footer/icons/icon-2.png";
import "../../images/iteration-2-images/footer/icons/icon-3.png";
import "../../images/iteration-2-images/footer/insta/li-0.png";
import "../../images/iteration-2-images/footer/insta/li-1.png";
import "../../images/iteration-2-images/footer/insta/li-2.png";
import "../../images/iteration-2-images/footer/insta/li-3.png";
import "../../images/iteration-2-images/footer/insta/li-4.png";
import "../../images/iteration-2-images/footer/insta/li-5.png";
import "../../images/iteration-2-images/footer/logo-footer.svg";

import icon1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../../images/iteration-2-images/footer/icons/icon-3.png";
import insta0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import insta1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import insta2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import insta3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import insta4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import insta5 from "../../images/iteration-2-images/footer/insta/li-5.png";
import logoFooter from "../../images/iteration-2-images/footer/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-col logo-col">
          <img src={logoFooter} alt="Teknolojik Yemekler Logo" className="footer-logo-img" />
          <div className="footer-info">
            <div className="footer-info-item">
              <img src={icon1} alt="location" className="footer-icon" />
              <span>341 Londonderry Road,<br />Istanbul Türkiye</span>
            </div>
            <div className="footer-info-item">
              <img src={icon2} alt="mail" className="footer-icon" />
              <span>aciktim@teknolojikyemekler.com</span>
            </div>
            <div className="footer-info-item">
              <img src={icon3} alt="phone" className="footer-icon" />
              <span>+90 216 123 45 67</span>
            </div>
          </div>
        </div>
        <div className="footer-col menu-col">
          <h3>Hot Menu</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div className="footer-col insta-col">
          <h3>Instagram</h3>
          <div className="footer-insta-grid">
            <img src={insta0} alt="insta0" />
            <img src={insta1} alt="insta1" />
            <img src={insta2} alt="insta2" />
            <img src={insta3} alt="insta3" />
            <img src={insta4} alt="insta4" />
            <img src={insta5} alt="insta5" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2023 Teknolojik Yemekler.</span>
      </div>
    </footer>
  );
};

export default Footer;