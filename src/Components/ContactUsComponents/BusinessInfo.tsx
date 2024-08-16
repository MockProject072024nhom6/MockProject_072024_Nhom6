import React from 'react';

const BusinessInfo: React.FC = () => {
  return (
    <div className="text-black px-36 pb-10">
      <div className="grid grid-cols-4">
        <div>Giờ mở cửa</div>
        <div>Truyền thông xã hội</div>
      </div>

      <div className="grid grid-cols-4">
        <div>Sunday - Saturday</div>
        <div>Facebook</div>
      </div>
    </div>
  );
};

export default BusinessInfo;
