import { headerContainer, headerMain } from "../Style/tailwindStyles"
import "../index.css"
import logo from "@/Assets/logo1.png"
import { Hover } from "@/Components/Motion/Motion"

function Header() {
  return (
    <header className={headerMain}>
      <div className={headerContainer}>
        <img src={logo} alt='logo-company' width={150} height={150} />
        <nav className='flex gap-5 uppercase'>
          <Hover text='Home' link='/' />
          <Hover text='Services' link='/price-service-list' />
          <Hover text='About us' link='/about-us' />
          <Hover text='Contact' link='/contact' />
        </nav>
      </div>
    </header>
  )
}

export default Header
