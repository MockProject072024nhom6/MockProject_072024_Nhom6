import { guardStyle } from "../../../Styles/GuardStyle"
import { Form, Formik } from "formik"
import { profileObject } from "../../../Objects/Objects"
import { handleFormData } from "../../../Utils/HandleFunctions"
import { useAppDispatch } from "../../../ReduxToolkit/Store"
import { I_Props_ProfileComponents } from "../../../Types/GuardTypes"
import { setProfileData } from "../../../ReduxToolkit/Features/DashboardSlice"
import { profileSchema } from "../../../schemas/guardSchema"
import FormProfile from "./FormProfile"

export default function ProfileComponents({ onNext }: I_Props_ProfileComponents): JSX.Element {
  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={profileObject}
      validationSchema={profileSchema}
      onSubmit={values => {
        handleFormData(values.avatar)
        onNext()
        dispatch(setProfileData(values))
      }}
    >
      {({ handleChange, values, setFieldValue, handleSubmit, errors, isValid, dirty }) => (
        <Form className={`${guardStyle.form} relative`}>
          <FormProfile
            handleChange={handleChange}
            values={values}
            setFieldValue={setFieldValue}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
            dirty={dirty}
          />
        </Form>
      )}
    </Formik>
  )
}
