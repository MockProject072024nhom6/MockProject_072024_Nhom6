import React from 'react';
import { I_props_SelectInput } from '../../../Types/GuardTypes';

const SelectInput: React.FC<I_props_SelectInput> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-white border border-gray-300 p-2 rounded-lg w-full mb-4"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
