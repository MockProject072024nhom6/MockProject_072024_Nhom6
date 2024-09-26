import { customerLoginObject } from "@/Objects/Objects"
import { LoginSchema } from "@/schemas"
import { Form, Formik } from "formik"
import React from "react"
import CustomInput from "../SharedComponents/CustomInput"
import SubmitButton from "../SharedComponents/SubmitButton"

const FormLogin = () => {
  return (
    <Formik
      initialValues={{ customerLoginObject }}
      onSubmit={values => {
        console.log(values)
      }}
      validationSchema={LoginSchema}
      validateOnChange={true}
    >
      {({ isValid }) => (
        <Form className='w-full flex flex-col items-center'>
          <p className='text-[32px] mb-6 text-center'>LOGIN</p>
          <CustomInput label='Email Address' name='email' type='text' placeholder='Enter your email' />
          <CustomInput label='Password' name='password' type='password' placeholder='Enter your password' />
          <CustomInput label='Remeber me' type='checkbox' name='remember' />
          <SubmitButton type='submit' label='Login' isValid={isValid} />
        </Form>
      )}
    </Formik>
  )
}

export default FormLogin
