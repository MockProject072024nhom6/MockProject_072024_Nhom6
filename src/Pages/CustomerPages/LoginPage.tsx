import "../../vars.css"
import { style } from "../../Styles/CustomerAuthenticationStyle"
import FormLogin from "@/Components/LoginComponent/FormLogin"
import { Link } from "react-router-dom"
import BackButton from "@/Components/SharedComponents/BackButton"
import Logo from "@/Components/SharedComponents/Logo"
const LoginPage = () => {
  return (
    <div className={style.screen}>
      <Logo />
      <div className={style.container}>
        <BackButton />
        <FormLogin />
        <Link to='' className='text-[13px] mt-2 font-medium hover:underline'>
          Forgot password
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
