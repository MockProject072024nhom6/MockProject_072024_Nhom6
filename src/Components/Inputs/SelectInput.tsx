import React from 'react';

type SelectInputProps = {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectInput: React.FC<SelectInputProps> = ({
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
