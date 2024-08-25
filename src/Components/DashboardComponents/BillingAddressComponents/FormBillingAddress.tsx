import React from "react"
import { I_Props_FormBillingAddress } from "../../../Types/GuardTypes"
import LocationComponents from "./LocationComponents"
import AddressLine1Components from "../../BillingAddressComponents/AddressLine1Components"
import Forms from "../../SharedComponents/Forms"
import Button from "../../SharedComponents/Button"
import { addressLine1List, countryList } from "../../../Arrays/Arrays"
import ErrorMessage from "../../SharedComponents/ErrorMessage"

export default function FormBillingAddress({
  handleChange,
  values,
  handleSubmit,
  errors,
  isValid,
  dirty,
  onPrevious
}: I_Props_FormBillingAddress) {
  return (
    <>
      <LocationComponents
        list={countryList}
        locationValue={values.location}
        cityValue={values.city}
        stateValue={values.state}
        handleChange={handleChange}
        errors={errors}
      />
      <AddressLine1Components list={addressLine1List} value={values.addressLine1} handleChange={handleChange} />
      <ErrorMessage error={errors.addressLine1} />
      <Forms
        label='Certificate'
        name='certificate'
        value={values.certificate}
        handleChange={handleChange}
        type='file'
      />
      <Forms label='Zip code' name='zipCode' value={values.zipCode} handleChange={handleChange} />
      <Forms label='Experience' name='experience' value={values.experience} handleChange={handleChange} />
      <ErrorMessage error={errors.experience} />
      <Button
        name='Previous step'
        className='absolute left-0 -bottom-10'
        onClick={onPrevious}
        isValid={isValid}
        dirty={dirty}
      />
      <Button
        name='Next'
        type='primary'
        className='absolute right-0 -bottom-10'
        onClick={handleSubmit}
        isValid={isValid}
        dirty={dirty}
      />
    </>
  )
}
