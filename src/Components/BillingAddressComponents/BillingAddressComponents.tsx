import { Form, Formik } from "formik"
import React from "react"
import { billingAddressObjects } from "../../Objects/Objects"
import { addressLine1List, countryList } from "../../Arrays/Arrays"
import AddressLine1Components from "./AddressLine1Components"
import Forms from "../SharedComponents/Forms"
import LocationComponents from "./LocationComponents"
import { guardStyle } from "../../Styles/GuardStyle"

export default function BillingAddressComponents() {
  return (
    <Formik
      initialValues={billingAddressObjects}
      onSubmit={values => {
        console.log("🚀 ~ values:", values)
      }}
    >
      {({ handleChange, values }) => (
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
        </Form>
      )}
    </Formik>
  )
}
