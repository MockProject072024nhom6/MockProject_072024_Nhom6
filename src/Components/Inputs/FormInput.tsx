import React from 'react';

type FormInputProps = {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: React.FC<FormInputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-white border border-gray-300 p-2 rounded-lg w-full mb-4"
    />
  );
};

export default FormInput;
