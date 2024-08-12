import React from "react"
import "../../vars.css"
import Logo from "../../Components/LoginComponent/Logo"
import BackButton from "../../Components/LoginComponent/BackButton"
import CustomInput from "../../Components/LoginComponent/CustomInput"
import SubmitButton from "../../Components/LoginComponent/SubmitButton"
import { Form, Formik } from "formik"
import CustomSelect from "../../Components/LoginComponent/CustomSelect"
import { SignUpSchema } from "../../schemas"
import { Link, useNavigate } from "react-router-dom"

const SignUpPage = () => {
  const navigate = useNavigate()
  return (
    <div className='w-screen flex flex-col justify-center items-center font-montserrat mb-10'>
      <Logo />

      <div className='w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] flex flex-col justify-center items-center pt-4 pb-10 mt-10 shadow-blueShadow rounded-xl'>
        <BackButton />
        <p className='text-[32px] mb-6 text-center'>SIGN UP</p>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
            country: "",
            state: "",
            city: ""
          }}
          onSubmit={() => navigate("/customer/login")}
          validationSchema={SignUpSchema}
          validateOnChange={true}
          validateOnBlur={true}
        >
          <Form className='w-full flex flex-col items-center'>
            <CustomInput label='First Name' name='firstName' type='text' placeholder='Enter your first name' />
            <CustomInput label='Last Name' name='lastName' type='text' placeholder='Enter your last name' />
            <CustomInput label='Phone Number' name='phoneNumber' type='text' placeholder='Enter your phone number' />
            <CustomInput label='Email Address' name='email' type='text' placeholder='Enter your email address' />
            <CustomInput label='Password' name='password' type='password' placeholder='Enter your password' />
            <CustomInput
              label='Confirm Password'
              name='confirmPassword'
              type='password'
              placeholder='Confirm your password'
            />
            <CustomSelect label='Gender' name='gender'>
              <option value=''>Please select your gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </CustomSelect>
            <CustomInput label='Country' name='country' type='text' placeholder='Enter your country' />
            <div className='w-[75%] flex justify-between gap-2'>
              <CustomInput label='State' name='state' type='text' placeholder='Enter your state' />
              <CustomInput label='City' name='city' type='city' placeholder='Enter your city' />
            </div>
            <SubmitButton type='submit' label='Sign Up' />
          </Form>
        </Formik>

        <div className='text-[13px] mt-2 font-medium'>
          Already have an account? <Link to='/customer/login'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
