import { guardStyle } from "../../Styles/GuardStyle"
import Forms from "../SharedComponents/Forms"
import { Form, Formik } from "formik"
import AvatarForm from "../SharedComponents/AvatarForm"
import userImage from "../../Assets/user-image.png"
import { profileObject } from "../../Objects/Objects"
import PhoneComponents from "./PhoneComponents"
import { useAppSelector } from "../../ReduxToolkit/Store"

export default function ProfileComponents(): JSX.Element {
  const { avatarImage } = useAppSelector(state => state.DashboardSlice)
  // console.log("🚀 ~ ProfileComponents ~ avatarImage:", avatarImage)
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
          <PhoneComponents
            label='phone'
            name='phone'
            value={values.phone}
            device={values.device}
            handleChange={handleChange}
          />
          <Forms label='organization' name='organization' value={values.organization} handleChange={handleChange} />
          <Forms label='department' name='department' value={values.department} handleChange={handleChange} />
          <Forms label='account type' name='accountType' value={values.accountType} handleChange={handleChange} />
        </Form>
      )}
    </Formik>
  )
}
