import { style } from "@/Styles/CustomerAuthenticationStyle"
import { useField } from "formik"
import React from "react"

const CustomSelect = ({ label, ...props }: I_Props_CustomSelect) => {
  const [field, meta] = useField(props.name)

  return (
    <div className='w-[75%] mb-3'>
      <p className='text-[13px] mb-[6px] font-medium'>{label}</p>
      <select className={`${style.customInput} ${meta.error && meta.touched && "input-error"}`} {...field} {...props}>
        {props.children}
      </select>
      {meta.error && meta.touched && <div className='text-[13px] text-red-600 ml-1'>{meta.error}</div>}
    </div>
  )
}

export default CustomSelect
