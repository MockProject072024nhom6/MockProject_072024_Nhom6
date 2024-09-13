import { useEffect, useState } from "react"
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
import Logo from "@/Components/SharedComponents/Logo"
import { getImageUrl } from "@/Utils/unltis"

function Header() {
  return (
    <header className={headerMain}>
      <div className={headerContainer}>
        {/* Phần chứa số điện thoại và email */}
        <div className={contactInfoContainer}>
          <span>
            <a href='tel:+1234567890' className={contactLink}>
              +123 456 7890 |{" "}
            </a>
            <a href='mailto:example@example.com' className={contactLink}>
              example@example.com
            </a>
          </span>
        </div>
        {/* Phần chứa các icon mạng xã hội */}
        <div className={socialIconsContainer}>
          <a href='#' className={socialIcon}>
            <Facebook />
          </a>
          <a href='#' className={socialIcon}>
            <Instagram />
          </a>
          <a href='#' className={socialIcon}>
            <Twitter />
          </a>
          <a href='https://www.linkedin.com' className='text-blue-500 hover:text-blue-700'>
            <Linkedin />
          </a>
        </div>

        {/* Phần chứa Login và Signup */}
        <div className={authLinksContainer}>
          <div className={signupStyle}>
            <NavLink to='/signup' className={authLink}>
              Signup
            </NavLink>
          </div>
          <div className={loginStyle}>
            <NavLink to='/login' className={`${authLink} ${loginText}`}>
              Login
            </NavLink>
          </div>
        </div>
      </div>
      <nav className='flex items-center justify-between px-5 h-[70px] text-lg bg-white border-b border-gray-200 shadow-md py-[50px]'>
        <img src={getImageUrl("logo1.png")} alt='logo' className='w-[250px]' />
        <div className='flex gap-6 uppercase font-bold '>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/servicetype'>Service</NavLink>
          <NavLink to='/price-service-list'>Price</NavLink>
          <NavLink to='/about-us'>About us</NavLink>
          <NavLink to='/training'>Training</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
