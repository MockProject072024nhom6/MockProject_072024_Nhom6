import { Form, Formik } from "formik"
import { billingAddressObjects } from "../../../Objects/Objects"
import { guardStyle } from "../../../Styles/GuardStyle"
import { I_Props_BillingAddressComponents } from "../../../Types/GuardTypes"
import { useAppDispatch } from "../../../ReduxToolkit/Store"
import { setBillingAddressData } from "../../../ReduxToolkit/Features/DashboardSlice"
import FormBillingAddress from "./FormBillingAddress"
import { billingAddressSchema } from "../../../schemas/guardSchema"

export default function BillingAddressComponents({
  onPrevious,
  onNext
}: I_Props_BillingAddressComponents): JSX.Element {
  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={billingAddressObjects}
      validationSchema={billingAddressSchema}
      onSubmit={values => {
        onNext()
        dispatch(setBillingAddressData(values))
      }}
    >
      {({ handleChange, values, handleSubmit, errors, isValid, dirty }) => (
        <Form className={guardStyle.form}>
          <FormBillingAddress
            handleChange={handleChange}
            values={values}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
            dirty={dirty}
            onPrevious={onPrevious}
          />
        </Form>
      )}
    </Formik>
  )
}
