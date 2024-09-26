import * as yup from "yup"

const passwordRegax = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
const phoneNumberRegax = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/

export const LoginSchema = yup.object().shape({
  email: yup.string().email("Invalid Email Address").required("Required"),
  password: yup.string().required("Required")
})

export const SignUpSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  phoneNumber: yup.string().matches(phoneNumberRegax, { message: "Invalid phone number" }).required("Required"),
  email: yup.string().email("Invalid Email Address").required("Required"),
  password: yup.string().matches(passwordRegax, { message: "Please create a stronger password" }).required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Required"),
  gender: yup.string().oneOf(["Male", "Female"], "Please select a gender").required("Required"),
  country: yup.string().required("Required"),
  state: yup.string().required("Required"),
  city: yup.string().required("Required")
})
