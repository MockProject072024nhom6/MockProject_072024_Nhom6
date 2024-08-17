import { guardStyle } from "../../Styles/GuardStyle"
import Forms from "../SharedComponents/Forms"
import { Form, Formik } from "formik"
import AvatarForm from "../SharedComponents/AvatarForm"
import { profileObject } from "../../Objects/Objects"
import PhoneComponents from "./PhoneComponents"
import { handleFormData } from "../../Utils/HandleFunctions"
import { useAppDispatch } from "../../ReduxToolkit/Store"

export default function ProfileComponents(): JSX.Element {
  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={profileObject}
      onSubmit={values => {
        console.log("🚀 ~ values:", values)
        handleFormData(values.avatar, dispatch)
      }}
    >
      {({ handleChange, values, setFieldValue }) => (
        <Form className={guardStyle.form}>
          <AvatarForm avatar='avatar' gap='gap-20' setFieldValue={setFieldValue} />
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
