import * as Yup from "yup"

export const profileSchema = Yup.object({
  fullName: Yup.string().min(4, "Your aliases must be at least 4 characters").required("You must fill in this section"),
  email: Yup.string().email("Invalid email").required("You must fill in this section"),
  phone: Yup.string()
    .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Invalid phone number format")
    .required("You must fill in this section"),
  device: Yup.string().required("You must fill in this section"),
  organization: Yup.string().required("You must fill in this section"),
  department: Yup.string().required("You must fill in this section"),
  accountType: Yup.string().required("You must fill in this section (personal or enterprise)")
})

export const billingAddressSchema = Yup.object({
  location: Yup.string().required("You must fill in this section"),
  city: Yup.string().required("You must fill in this section"),
  state: Yup.string().required("You must fill in this section"),
  addressLine1: Yup.string().required("You must fill in this section"),
  experience: Yup.string().required("You must fill in this section (personal or enterprise)")
})
