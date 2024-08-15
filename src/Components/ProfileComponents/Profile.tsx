import { guardStyle } from "../../Styles/GuardStyle"
import Forms from "../SharedComponents/Forms"
import { Form, Formik } from "formik"
import AvatarForm from "../SharedComponents/AvatarForm"
import Phone from "./Phone"
import { ProfileObject } from "../../Objects/ProfileObjects"

export default function ProfileComponents({
  avatar,
  fullName,
  email,
  phone,
  organization,
  department,
  accountType,
  userImage
}: I_Props_Profile): JSX.Element {
  return (
    <>
      <Formik
        initialValues={ProfileObject}
        onSubmit={values => {
          console.log("🚀 ~ values:", values)
        }}
      >
        {({ handleChange, values }) => (
          <Form className={guardStyle.form}>
            <AvatarForm avatar={avatar} userImage={userImage} />
            <Forms label={fullName} name={fullName} value={values.fullName} handleChange={handleChange} />
            <Forms label={email} name={email} value={values.email} handleChange={handleChange} />
            <Phone label={phone} name={phone} value={values.phone} device={values.device} handleChange={handleChange} />
            <Forms label={organization} name={organization} value={values.organization} handleChange={handleChange} />
            <Forms label={department} name={department} value={values.department} handleChange={handleChange} />
            <Forms label={accountType} name={accountType} value={values.accountType} handleChange={handleChange} />
          </Form>
        )}
      </Formik>
    </>
  )
}
