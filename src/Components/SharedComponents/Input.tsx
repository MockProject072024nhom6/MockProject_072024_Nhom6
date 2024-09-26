import React from "react"

export default function Input({
  className,
  id,
  type,
  name,
  value,
  accept,
  placeholder,
  handleChange,
  multiple,
  disabled
}: I_Props_Input) {
  return (
    <div className={className}>
      <input
        className='outline-none w-full'
        id={id}
        type={type}
        name={name}
        accept={accept}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        multiple={multiple}
        disabled={disabled}
      />
    </div>
  )
}
