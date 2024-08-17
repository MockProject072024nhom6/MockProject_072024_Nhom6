import React from 'react';

interface InputFieldProps {
  label: string;
  type: 'email' | 'password';
}

const InputField: React.FC<InputFieldProps> = ({ label, type }) => {
  const id = `${type}Input`;

  return (
    <div>
      <label htmlFor={id} className="self-start mt-3 text-sm font-medium leading-none text-black text-opacity-60">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="flex shrink-0 mt-1.5 rounded-md border border-solid border-black border-opacity-30 h-[41px] w-full"
        aria-label={label}
      />
      {type === 'password' && (
        <div className="flex justify-end items-center mt-[-41px] pr-4 h-[41px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/27f0ea893d38750234293a48728c06d331587cc2ab0cfde351920274137d5bc6?placeholderIfAbsent=true&apiKey=c96eb887b20543469ff7a536a32d4576"
            className="object-contain aspect-square w-[21px]"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default InputField;