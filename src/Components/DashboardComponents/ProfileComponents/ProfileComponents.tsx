import { guardStyle } from "../../../Styles/GuardStyle"
import Forms from "../../SharedComponents/Forms"
import { Form, Formik } from "formik"
import AvatarForm from "./AvatarForm"
import { profileObject } from "../../../Objects/Objects"
import PhoneComponents from "./PhoneComponents"
import { handleFormData } from "../../../Utils/HandleFunctions"
import { useAppDispatch } from "../../../ReduxToolkit/Store"
import Button from "../../SharedComponents/Button"

export default function ProfileComponents({ onNext }: I_Props_ProfileComponents): JSX.Element {
  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={profileObject}
      onSubmit={values => {
        handleFormData(values.avatar, dispatch)
      }}
    >
      {({ handleChange, values, setFieldValue }) => (
        <Form className={`${guardStyle.form} relative`}>
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
          <Button name='Next' type='primary' position='absolute right-0 -bottom-10' onClick={onNext} />
        </Form>
      )}
    </Formik>
  )
}
