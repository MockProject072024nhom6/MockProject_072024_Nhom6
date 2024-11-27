import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="px-16 py-3.5 mt-11 text-sm font-medium leading-none text-center text-white whitespace-nowrap bg-blue-700 rounded-md w-full max-md:px-5 max-md:mt-10">
      {text}
    </button>
  );
};

export default Button;