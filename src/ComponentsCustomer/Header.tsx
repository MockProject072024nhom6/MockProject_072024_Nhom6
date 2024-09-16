import { headerContainer, headerMain } from "../Style/tailwindStyles"
import "../index.css"
import { NavLink } from "react-router-dom"
import logo from "@/Assets/logo1.png"

function Header() {
  return (
    <header className={headerMain}>
      <div className={headerContainer}>
        <img src={logo} alt='logo-company' width={150} height={150} />
        <nav className='flex gap-5 uppercase'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/price-service-list'>Services</NavLink>
          <NavLink to='/about-us'>About us</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
