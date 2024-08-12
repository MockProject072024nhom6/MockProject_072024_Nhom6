import "../../vars.css"
import Logo from "../../Components/LoginComponent/Logo"
import BackButton from "../../Components/LoginComponent/BackButton"
import Input from "../../Components/LoginComponent/CustomInput"
import SubmitButton from "../../Components/LoginComponent/SubmitButton"
import { Form, Formik } from "formik"
import { LoginSchema } from "../../schemas"
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center font-montserrat mb-10'>
      <Logo />

      <div className='w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] flex flex-col justify-center items-center pt-4 pb-10 mt-10 shadow-blueShadow rounded-xl'>
        <BackButton />
        <p className='text-[32px] mb-6 text-center'>LOGIN</p>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => {
            console.log(values)
          }}
          validationSchema={LoginSchema}
          validateOnChange={true}
        >
          {props => (
            <Form className='w-full flex flex-col items-center'>
              <Input label='Email Address' name='email' type='text' placeholder='Enter your email' />
              <Input label='Password' name='password' type='password' placeholder='Enter your password' />
              <Input label='Remeber me' type='checkbox' name='remember' />
              <SubmitButton type='submit' label='Login' />
            </Form>
          )}
        </Formik>

        <Link to='' className='text-[13px] mt-2 font-medium hover:underline'>
          Forgot password
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
