import React from "react"
import "../../vars.css"
import Logo from "../../Components/SharedComponents/Logo"
import BackButton from "../../Components/SharedComponents/BackButton"
import { style } from "../../Styles/CustomerAuthenticationStyle"
import FormSignup from "../../Components/SignUpComponent/FormSignUp"
import { Link } from "react-router-dom"

const SignUpPage = () => {
  return (
    <div className={style.screen}>
      <Logo />
      <div className={style.container}>
        <BackButton />
        <FormSignup />
        <div className='text-[13px] mt-2 font-medium'>
          Already have an account? <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
