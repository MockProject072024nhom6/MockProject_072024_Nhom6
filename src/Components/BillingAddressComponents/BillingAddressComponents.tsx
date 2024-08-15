import { Form, Formik } from "formik"
import React from "react"
import Select from "../SharedComponents/Select"
import Location from "./Location"
import { billingAddressObjects } from "../../Objects/objects"
import { addressLine1List, countryList } from "../../Arrays/Arrays"
import AddressLine1Components from "./AddressLine1Components"

export default function BillingAddressComponents() {
  return (
    <Formik
      initialValues={billingAddressObjects}
      onSubmit={values => {
        console.log("🚀 ~ values:", values)
      }}
    >
      {({ handleChange, values }) => (
        <Form>
          <Location
            list={countryList}
            locationValue={values.location}
            cityValue={values.city}
            stateValue={values.state}
            handleChange={handleChange}
          />
          <AddressLine1Components list={addressLine1List} value={values.addressLine1} handleChange={handleChange} />
        </Form>
      )}
    </Formik>
  )
}
