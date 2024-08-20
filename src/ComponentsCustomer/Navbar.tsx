import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import {
  navContainer, logoNavContainer, navItemsContainer, navItem, navMainContainer,
  dropdownContainer, dropdownItem
} from "../Style/tailwindStyles";
import "../index.css";
import logo from "../assets/logo1.png";

function Navbar() {
  return (
    <nav className={navContainer}>
      <div className={navMainContainer}>
        <div className={logoNavContainer}>
          <img src={logo} alt="Logo" className="h-20" />
        </div>
        <div className={navItemsContainer}>
          <a href="#home" className={navItem}>HOME</a>
          <div className="relative group">
            <a href="#services" className={navItem}>SECURITY SERVICES</a>
            <div className={dropdownContainer}>
              <a href="#personal-protection" className={dropdownItem}>Personal Protection</a>
              <a href="#enterprise-security" className={dropdownItem}>Enterprise Security</a>
              <a href="#event-security" className={dropdownItem}>Event Security</a>
              <a href="#aviation-security" className={dropdownItem}>Aviation Security</a>
              <a href="#transport-security" className={dropdownItem}>Transport Security</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#about" className={navItem}>ABOUT</a>
            <div className={dropdownContainer}>
              <a href="#about-us" className={dropdownItem}>About Us</a>
              <a href="#bodyguard-training" className={dropdownItem}>Bodyguard Training Class</a>
            </div>
          </div>
          <a href="#contact" className={navItem}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
