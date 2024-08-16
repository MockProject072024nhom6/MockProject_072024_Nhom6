import React from 'react';

const ServiceDetails: React.FC = () => {
  return (
    <div className="grid grid-cols-3 text-black pt-10 mx-32 text-center">
      <div>
        <div className="p-5">
          <p className="font-bold text-blue-800 pb-5">Licensed & Insured</p>
          <p>
            XpressGuards is a fully licensed and insured security guard and
            protection agency. We’re owned and operated by certified law
            enforcement officers.
          </p>
        </div>
        <div className="p-5">
          <p className="font-bold text-blue-800 pb-5">Armed & Unarmed</p>
          <p>
            Our fully trained uniformed guards are available armed and unarmed,
            24 hours a day, 7 days a week. All of our security guards are 100%
            certified.
          </p>
        </div>
      </div>
      <div className="text-black w-full h-full">
        <div className="bg-computer-image bg-center p-36 bg-no-repeat"></div>
      </div>
      <div>
        <div className="p-5">
          <p className="font-bold text-blue-800 pb-5">Trained & Certified</p>
          <p>
            Our security guards are put through rigorous training to handle any
            security post assigned to them. Our guards are CPR/AED/First Aid
            certified.
          </p>
        </div>
        <div className="p-5">
          <p className="font-bold text-blue-800 pb-5">Custom Solutions</p>
          <p>
            At XpressGuards, we provide professional security solutions
            customized to fit each individual client and business. Call now to
            get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
