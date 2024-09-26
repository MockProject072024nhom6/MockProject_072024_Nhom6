import { guardStyle } from "../../Styles/GuardStyle"
import Forms from "../SharedComponents/Forms"
import { Form, Formik } from "formik"
import AvatarForm from "../SharedComponents/AvatarForm"
import Phone from "./Phone"
import userImage from "../../Assets/user-image.png"
import { profileObject } from "../../Objects/Objects"

export default function ProfileComponents(): JSX.Element {
  return (
    <Formik
      initialValues={profileObject}
      onSubmit={values => {
        console.log("🚀 ~ values:", values)
      }}
    >
      {({ handleChange, values }) => (
        <Form className={guardStyle.form}>
          <AvatarForm avatar='avatar' userImage={userImage} />
          <Forms label='full name' name='fullName' value={values.fullName} handleChange={handleChange} />
          <Forms label='email' name='email' value={values.email} handleChange={handleChange} />
          <Phone label='phone' name='phone' value={values.phone} device={values.device} handleChange={handleChange} />
          <Forms label='organization' name='organization' value={values.organization} handleChange={handleChange} />
          <Forms label='department' name='department' value={values.department} handleChange={handleChange} />
          <Forms label='account type' name='accountType' value={values.accountType} handleChange={handleChange} />
        </Form>
      )}
    </Formik>
  )
}
