import React from 'react';
import { I_props_ButtonBlack } from '../../Types/GuardTypes';

const ButtonBlack: React.FC<I_props_ButtonBlack> = ({
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

export default ButtonBlack;
