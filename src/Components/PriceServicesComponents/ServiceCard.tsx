import React from 'react';
import { I_props_ServiceCard } from '../../Types/GuardTypes';
const ServiceCard: React.FC<I_props_ServiceCard> = ({
  image,
  title,
  description,
  note,
  priceRange,
  groupSize,
  vipBadge,
}) => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg p-14 mb-4 mx-32">
      <img src={image} alt={title} className="w-32 h-32 rounded-lg" />
      <div className="flex flex-col justify-between ml-4 flex-grow">
        <div>
          <h2 className="text-lg font-semibold">
            {title} {vipBadge && <span className="ml-2 badge">VIP</span>}
          </h2>
          <p className="text-gray-700">{description}</p>
          <p className="text-sm text-gray-500">{note}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg">
              {priceRange}
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 ml-2 rounded-lg">
              {groupSize}
            </span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Booking now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
