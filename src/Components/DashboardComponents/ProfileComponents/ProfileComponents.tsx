import { guardStyle } from "../../../Styles/GuardStyle"
import { Form, Formik } from "formik"
import { handleFormData } from "../../../Utils/HandleFunctions"
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Store"
import { I_Props_ProfileComponents } from "../../../Types/GuardTypes"
import { setProfileData } from "../../../ReduxToolkit/Features/DashboardSlice"
import { profileSchema } from "../../../schemas/guardSchema"
import FormProfile from "./FormProfile"

export default function ProfileComponents({ onNext }: I_Props_ProfileComponents): JSX.Element {
  const { profileData } = useAppSelector(state => state.DashboardSlice)
  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={profileData}
      validationSchema={profileSchema}
      onSubmit={values => {
        handleFormData(values.avatar)
        onNext()
        dispatch(setProfileData(values))
        localStorage.setItem("SAVE_PROFILE_INFO", JSON.stringify(values))
      }}
    >
      {({ handleChange, values, setFieldValue, handleSubmit, errors, isValid }) => (
        <Form className={`${guardStyle.form} relative`}>
          <FormProfile
            handleChange={handleChange}
            values={values}
            setFieldValue={setFieldValue}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
            dirty={true}
          />
        </Form>
      )}
    </Formik>
  )
}
