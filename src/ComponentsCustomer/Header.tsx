import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { Facebook, Instagram, Twitter , Linkedin } from 'lucide-react';
import {
  headerContainer, contactInfoContainer, contactLink,
  socialIconsContainer, socialIcon, authLinksContainer, authLink,headerMain, loginStyle , loginText, signupStyle
} from "../Style/tailwindStyles";
import "../index.css"



function Header() {
  return (
    <header className={headerMain}>
        <div className={headerContainer}>
      {/* Phần chứa số điện thoại và email */}
      <div className={contactInfoContainer}>
        <span>
          <a href="tel:+1234567890" className={contactLink}>
            +123 456 7890
          </a>
        </span>
        <span>
          <a href="mailto:example@example.com" className={contactLink}>
            example@example.com
          </a>
        </span>
      </div>

      {/* Phần chứa các icon mạng xã hội */}
      <div className={socialIconsContainer}>
        <a href="#" className={socialIcon}>
          <Facebook />
        </a>
        <a href="#" className={socialIcon}>
          <Instagram />
        </a>
        <a href="#" className={socialIcon}>
          <Twitter />
        </a>
        <a href="https://www.linkedin.com" className="text-blue-500 hover:text-blue-700">
        <Linkedin />
      </a>
      </div>

      {/* Phần chứa Login và Signup */}
      <div className={authLinksContainer}>
        
        <div className={signupStyle}>
                <a href="#" className={authLink}>
                    Signup
                </a>
        </div>
        <div className={loginStyle}>
            <a href="#" className={`${authLink} ${loginText}`}>
                Login
            </a>
        </div>
      </div>
    </div>
    </header>
  );
}

export default Header;
