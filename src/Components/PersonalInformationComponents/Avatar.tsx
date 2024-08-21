import React from 'react';
import imageProfile from '../../assets/images/avatar.jpg';
import { I_props_Avatar } from '../../Types/GuardTypes';

const Avatar: React.FC<I_props_Avatar> = ({
  size = 100,
  border = '2px solid #ccc',
}) => {
  return (
    <div className="relative">
      <div
        className={`absolute top-0 left-0 rounded-full mx-24 mt-60 overflow-hidden`}
        style={{ width: size, height: size, border }}
      >
        <button className="w-full h-full rounded-full overflow-hidden p-0 m-0 border-none">
          <img
            src={imageProfile}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Avatar;
