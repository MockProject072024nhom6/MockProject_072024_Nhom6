import React from "react"
import AvatarForm from "./AvatarForm"
import ErrorMessage from "../../SharedComponents/ErrorMessage"
import { formProfileFields } from "../../../Arrays/Arrays"
import Button from "../../SharedComponents/Button"
import { I_Props_FormProfile } from "../../../Types/GuardTypes"

export default function FormProfile({
  handleChange,
  values,
  setFieldValue,
  handleSubmit,
  errors,
  isValid,
  dirty
}: I_Props_FormProfile) {
  return (
    <div>
      <AvatarForm avatar='avatar' gap='gap-20' setFieldValue={setFieldValue} />
      <ErrorMessage error={errors.avatar} />
      {formProfileFields.map(({ label, name, component: Component }) => (
        <div key={name}>
          <Component label={label} name={name} value={values[name]} handleChange={handleChange} />
          <ErrorMessage error={errors[name as keyof typeof errors]} />
        </div>
      ))}
      <Button
        name='Next'
        type='primary'
        className='absolute right-0 -bottom-10'
        onClick={handleSubmit}
        isValid={isValid}
        dirty={dirty}
      />
    </div>
  )
}
