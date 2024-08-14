import React from "react"
import Forms from "./Forms"
import { Form, Formik, useFormik } from "formik"

const initialValues: I_Props_Profile = {
  avatar: "",
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  department: "",
  accountType: ""
}
export default function Profile({
  avatar,
  fullName,
  email,
  phone,
  organization,
  department,
  accountType
}: I_Props_Profile) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log("🚀 ~ values:", values)
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <div>
              <label>{avatar}</label>
              <img src='' alt='' />
            </div>
            <Forms label={fullName} name='fullName' value={values.fullName} onChange={handleChange} />
            <Forms label={email} name='email' value={values.email} onChange={handleChange} />
            <Forms label={phone} name='phone' value={values.phone} onChange={handleChange} />
            <Forms label={organization} name='organization' value={values.organization} onChange={handleChange} />
            <Forms label={department} name='department' value={values.department} onChange={handleChange} />
            <Forms label={accountType} name='accountType' value={values.accountType} onChange={handleChange} />
          </Form>
        )}
      </Formik>
    </>
  )
}
