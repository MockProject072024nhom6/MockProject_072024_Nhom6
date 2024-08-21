import React from 'react';
import { I_props_ButtonBlue } from '../../Types/GuardTypes';

const ButtonBlue: React.FC<I_props_ButtonBlue> = ({
  buttonText,
  className,
  onClick,
}) => {
  return (
    <button
      className={`bg-black text-white px-6 py-2 rounded-full shadow-lg ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonBlue;
