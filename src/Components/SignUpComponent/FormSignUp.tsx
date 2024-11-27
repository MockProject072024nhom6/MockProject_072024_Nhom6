import { SignUpSchema } from "../../schemas"
import { customerSignupObject } from "../../Objects/Objects"
import { Form, Formik } from "formik"
import React from "react"
import { useNavigate } from "react-router-dom"
import CustomInput from "../SharedComponents/CustomInput"
import CustomSelect from "../SharedComponents/CustomSelect"
import SubmitButton from "../SharedComponents/SubmitButton"

const FormSignup = () => {
  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{
        customerSignupObject
      }}
      onSubmit={() => navigate("/login")}
      validationSchema={SignUpSchema}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ isValid }) => (
        <>
          <p className='text-[32px] mb-6 text-center'>SIGN UP</p>
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
            <SubmitButton type='submit' label='Sign Up' isValid={!isValid} />
          </Form>
        </>
      )}
    </Formik>
  )
}

export default FormSignup
