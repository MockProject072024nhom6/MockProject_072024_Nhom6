import React from 'react';

const BusinessInfo: React.FC = () => {
  return (
    <div className="text-black px-36 pb-10">
      <div className="grid grid-cols-4">
        <div className="pb-3">Opening hours</div>
        <div>Social media</div>
      </div>

      <div className="grid grid-cols-4">
        <div>Sunday - Saturday: 24/24</div>
        <div>
          <a href="">Facebook</a>&emsp;
          <a href="">Instagram</a>&emsp;
          <a href="">Linkedin</a>&emsp;
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
