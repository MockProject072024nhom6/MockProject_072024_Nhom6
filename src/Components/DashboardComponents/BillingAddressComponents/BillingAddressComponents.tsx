import { Form, Formik } from "formik"
import { guardStyle } from "../../../Styles/GuardStyle"
import { I_Props_BillingAddressComponents } from "../../../Types/GuardTypes"
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Store"
import { setBillingAddressData } from "../../../ReduxToolkit/Features/DashboardSlice"
import FormBillingAddress from "./FormBillingAddress"
import { billingAddressSchema } from "../../../schemas/guardSchema"

export default function BillingAddressComponents({
  onPrevious,
  onNext
}: I_Props_BillingAddressComponents): JSX.Element {
  const { billingAddressData } = useAppSelector(state => state.DashboardSlice)
  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={billingAddressData}
      validationSchema={billingAddressSchema}
      onSubmit={values => {
        onNext()
        dispatch(setBillingAddressData(values))
      }}
    >
      {({ handleChange, values, handleSubmit, errors, isValid }) => (
        <Form className={guardStyle.form}>
          <FormBillingAddress
            handleChange={handleChange}
            values={values}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
            dirty={true}
            onPrevious={onPrevious}
          />
        </Form>
      )}
    </Formik>
  )
}
