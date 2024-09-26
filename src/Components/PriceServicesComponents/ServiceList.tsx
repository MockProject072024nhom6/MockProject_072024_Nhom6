import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    image: 'path/to/image1.jpg',
    title: 'Personal Protection (Normal Service)',
    description:
      'Our nationwide security guards are professionally trained and fully equipped to handle all your security needs.',
    note: 'Xin lưu ý rằng mức giá được nêu dưới đây chỉ mang tính chất tham khảo; giá có thể thay đổi trong các ngày lễ.',
    priceRange: '800 $ - 3000 $ / Hour',
    groupSize: '1 Group',
  },
  {
    image: 'path/to/image2.jpg',
    title: 'Personal Protection (VIP)',
    description:
      'Dịch vụ bảo vệ 24/7 với đội ngũ vệ sĩ giàu kinh nghiệm và trang bị vũ khí hiện đại.',
    note: 'Xin lưu ý rằng mức giá được nêu dưới đây chỉ mang tính chất tham khảo; giá có thể thay đổi trong các ngày lễ.',
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
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Call Now
        </button>
      </div>
    </div>
  );
};

export default ServiceList;
