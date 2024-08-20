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
  multiple
}: I_Props_Input) {
  return (
    <div>
      <input
        className={className}
        id={id}
        type={type}
        name={name}
        accept={accept}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        multiple={multiple}
      />
    </div>
  )
}
