import React from 'react';
import { I_props_FormInput } from '../../../Types/GuardTypes';

const FormInput: React.FC<I_props_FormInput> = ({
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
