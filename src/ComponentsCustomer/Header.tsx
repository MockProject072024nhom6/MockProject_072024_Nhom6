import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import {
  headerContainer,
  contactInfoContainer,
  contactLink,
  socialIconsContainer,
  socialIcon,
  authLinksContainer,
  authLink,
  headerMain,
  loginStyle,
  loginText,
  signupStyle
} from "../Style/tailwindStyles"
import "../index.css"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className={headerMain}>
      <div className={headerContainer}>
        <nav className='flex gap-5'>
          <NavLink to='/price-service-list'>Services</NavLink>
          <NavLink to='/about-us'>About us</NavLink>
          <NavLink to='/training'>Training</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
