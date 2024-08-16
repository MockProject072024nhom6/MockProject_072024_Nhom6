import React from 'react';

const ContactLocations: React.FC = () => {
  return (
    <div className="mx-5 grid grid-cols-3 grid-rows-3 gap-2">
      <div className="border-2 rounded-lg hover:bg-slate-100">
        <div className="p-2 text-black">
          <h4 className="font-semibold text-lg">California</h4>
          <p>333 Đại lộ Đại học, Phòng 200 Sacramento, CA 95825</p>
          <a href="tel:19162810285" className="text-blue-500">
            (916) 281-0785
          </a>
        </div>
      </div>
      <div className="border-2 rounded-lg hover:bg-slate-100">
        <div className="p-2 text-black">
          <h4 className="font-semibold text-lg">New York</h4>
          <p>77 Water Street, Tầng 8 Manhattan, NY 10005</p>
          <a href="tel:19162810285" className="text-blue-500">
            (916) 281-0785
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLocations;
