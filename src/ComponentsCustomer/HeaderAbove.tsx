import React from "react"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import {
  contactInfoContainer,
  contactLink,
  socialIconsContainer,
  socialIcon,
  authLinksContainer,
  authLink,
  loginStyle,
  loginText,
  signupStyle
} from "../Style/tailwindStyles"
import { NavLink } from "react-router-dom"

export default function HeaderAbove() {
  return (
    <section className='bg-slate-300'>
      {/* Phần chứa số điện thoại và email */}
      <div className={contactInfoContainer}>
        <span>
          <a href='tel:+1234567890' className={contactLink}>
            +123 456 7890
          </a>
        </span>
        <span>
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
    </section>
  )
}
