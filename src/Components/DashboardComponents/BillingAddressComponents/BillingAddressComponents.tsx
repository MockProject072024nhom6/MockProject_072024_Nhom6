import { Form, Formik } from "formik"
import { billingAddressObjects } from "../../../Objects/Objects"
import { addressLine1List, countryList } from "../../../Arrays/Arrays"
import AddressLine1Components from "./AddressLine1Components"
import Forms from "../../SharedComponents/Forms"
import LocationComponents from "./LocationComponents"
import { guardStyle } from "../../../Styles/GuardStyle"
import Button from "../../SharedComponents/Button"
import { I_Props_BillingAddressComponents } from "../../../Types/GuardTypes"
import { useAppDispatch } from "../../../ReduxToolkit/Store"
import { setBillingAddressData } from "../../../ReduxToolkit/Features/DashboardSlice"

export default function BillingAddressComponents({
  onPrevious,
  onNext
}: I_Props_BillingAddressComponents): JSX.Element {
  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={billingAddressObjects}
      onSubmit={values => {
        onNext()
        dispatch(setBillingAddressData(values))
      }}
    >
      {({ handleChange, values, handleSubmit }) => (
        <Form className={guardStyle.form}>
          <LocationComponents
            list={countryList}
            locationValue={values.location}
            cityValue={values.city}
            stateValue={values.state}
            handleChange={handleChange}
          />
          <AddressLine1Components list={addressLine1List} value={values.addressLine1} handleChange={handleChange} />
          <Forms
            label='Certificate'
            name='certificate'
            value={values.certificate}
            handleChange={handleChange}
            type='file'
          />
          <Forms label='Zip code' name='zipCode' value={values.zipCode} handleChange={handleChange} />
          <Forms label='Experience' name='experience' value={values.experience} handleChange={handleChange} />
          <Button name='Previous step' className='absolute left-0 -bottom-10' onClick={onPrevious} />
          <Button name='Next' type='primary' className='absolute right-0 -bottom-10' onClick={handleSubmit} />
        </Form>
      )}
    </Formik>
  )
}
