import React from 'react';
import ServiceCard from './ServiceCard';
import avatar from '../../assets/images/avatar.jpg';

const services = [
  {
    image: avatar,
    title: 'Personal Protection (Normal Service)',
    description:
      'Our nationwide security guards are professionally trained and fully equipped to handle all your security needs.',
    note: 'Please note that the prices listed below are for reference only, prices may change during holidays.',
    priceRange: '800 $ - 3000 $ / Hour',
    groupSize: '1 Group',
  },
  {
    image: avatar,
    title: 'Personal Protection (VIP)',
    description:
      'Our nationwide security guards are professionally trained and fully equipped to handle all your security needs.',
    note: 'Please note that the prices listed below are for reference only, prices may change during holidays.',
    priceRange: '1200 $ - 10000 $ / Hour',
    groupSize: '1 Group',
    vipBadge: true,
  },
];

const ServiceList: React.FC = () => {
  return (
    <div className="p-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
      <div className="text-center mt-8 mx-32">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg flex justify-start">
          Call Now
        </button>
      </div>
    </div>
  );
};

export default ServiceList;
