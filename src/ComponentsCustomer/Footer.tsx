import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import contactImageA from "../assets/logoACCREDITED.png";
import contactImageB from "../assets/logoVEETRAN.png";
import contactImageC from "../assets/logoASIS.jpg";
import contactImageD from "../assets/payments.png"; 
import {
  footerContainer, footerMainContainer, footerItemContainer, footerTitle,
  footerItem, footerLink, contactImagesContainer, contactImage, footerUnderline, footerMain,
  footerLinkContainer
} from "../Style/tailwindStyles";
import "../index.css";


function Footer() {
  return (
    <footer className={footerMain}>
      <div className={footerMainContainer}>
        <div className={footerItemContainer}>
          <h4 className={footerTitle}>
            About Us
            <div className={footerUnderline}></div>
          </h4>
          <ul>
            <li className={footerItem}>
              Since 2019 we’ve provided security for families, special events and fortune 500 companies. We’re a military friendly employer with a vast amount of guards and staff standing by. Get a quote today!
            </li>
            <li>
              <img src={contactImageD} alt="Contact 1" className={contactImage} />
            </li>
          </ul>
        </div>
        <div className={footerItemContainer}>
          <h4 className={footerTitle}>
            Security Services
            <div className={footerUnderline}></div>
          </h4>
          <ul>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Security</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Bodyguards</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Surveillance</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Firewatch</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Executive Security</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Loss Prevention</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Employment</a>
            </li>
          </ul>
        </div>
        <div className={footerItemContainer}>
          <h4 className={footerTitle}>
            Locations
            <div className={footerUnderline}></div>
          </h4>
          <ul>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Los Angeles, California</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Sacramento, California</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Henderson, Nevada</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Addison, Texas</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Chicago, Illinois</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Atlanta, Georgia</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>Orlando, Florida</a>
            </li>
            <li className={footerLinkContainer}>
              <a href="#" className={footerLink}>New York, New York</a>
            </li>
          </ul>
        </div>
        <div className={footerItemContainer}>
          <h4 className={footerTitle}>
            Contact Us
            <div className={footerUnderline}></div>
          </h4>
          <div className={contactImagesContainer}>
            <img src={contactImageA} alt="Contact 1" className={contactImage} />
            <img src={contactImageB} alt="Contact 2" className={contactImage} />
            <img src={contactImageC} alt="Contact 3" className={contactImage} />
          </div>
        </div>
      </div>
      <div className={footerContainer}>
        <div className={footerMainContainer}>
          Copyright © 2023 XPressGuards.com • Florida #B3000044 • California #PPO121087 • Texas #B12676701 • Georgia #PSC002576 • Michigan #3801300221 • New Jersey #1987 • New York #1100221993 • Colorado #0853616L • Virginia #11-20139 • North Carolina #984047-GP • Washington D.C. SAB4000176 • Maryland 24PLU-SG39861 • South Carolina 4103 • Fire Watch Guards • Sitemap • Privacy Policy
        </div>
      </div>
    </footer>
  );
}

export default Footer;
