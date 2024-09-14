import * as Yup from "yup"

export const profileSchema = Yup.object({
  fullName: Yup.string().min(3, "Your account must be at least 3 characters").required("You must fill in this section"),
  // .test("isDuplicate", "Your account name is already taken", (value)=>{
  // })
  email: Yup.string().min(8, "Your name must be at least 8 characters").required("You must fill in this section"),
  phone: Yup.string().min(4, "Your full name must be at least 4 characters").required("You must fill in this section"),
  organization: Yup.string()
    .min(9, "Your phone number must be at min 9 characters")
    .max(18, "Your phone number must be at maximum 18 characters")
    .required("You must fill in this section"),
  maLoaiNguoiDung: Yup.string()
    .min(2, "Your user code must be at least 2 characters")
    .max(2, "Your user code must be at least 2 characters")
    .matches(/(HV|GV)/, "Your user code must be HV and GV")
    .required("You must fill in this section"),
  maNhom: Yup.string()
    .min(4, "Your group code must be at least 4 characters")
    .max(4, "Your group code must be at least 4 characters")
    .matches(/(GP01|GP02|GP03|GP04|GP05|GP06|GP07|GP08|GP09|GP10)/, "Your group code must be GP01 to GP10")
    .required("You must fill in this section")
  // email: Yup.string()
  // .min(14, "Your email must be at least 14 characters")
  // .email("Invalid email")
  // .required("You must fill in this section")
})
