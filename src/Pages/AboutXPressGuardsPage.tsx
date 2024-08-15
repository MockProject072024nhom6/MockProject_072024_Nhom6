import ImageCarousel from '../Components/Carousel';
const AboutXPressGuardsPage = () => {
  return (
    <main className=" bg-white m-0 p-0 ">
      <div className=" text-black mb-10 ">
        <div className="bg-header-background bg-center  p-36 ">
          <div className="text-4xl font-extrabold text-blue-800 mb-6 ">
            About XPressGuards{' '}
          </div>
          <div className="flex">
            <div className="text-lg text-white">Home </div>
            <div className="text-lg text-blue-800">About XPressGuards</div>
          </div>
        </div>
        <h3 className="text-4xl font-bold text-blue-800 mb-6"></h3>
      </div>
      <div className="text-center ">
        <div className="mx-32">
          <p className="text-blue-800 pt-10">Mission Statement and Services</p>
          <p className="text-4xl text-black font-extrabold pb-10">
            About XPressGuards
          </p>
          <p className=" text-black p-1">
            To provide outstanding security solutions to our customers by
            adhering to the following principles: Fast response time to
            accommodate our customers needs. Offer critical services at
            competitive rates for a wide range of security disciplines,
            resulting in cost-effective and comprehensive programs tailored to
            each customer. Recruit, retain, and develop security personnel by
            providing continuous training, teamwork environment and career
            growth. Foster effective communication and productive relationships
            with our staff and customers, to constantly provide excellent
            solutions and services.
          </p>
          <div className="grid grid-cols-3 text-black pt-10">
            <div>
              <div className="p-5">
                <p className="font-bold text-blue-800 pb-5">
                  Licensed & Insured
                </p>
                <p>
                  XpressGuards is a fully licensed and insured security guard
                  and protection agency. We’re owned and operated by certified
                  law enforcement officers.
                </p>
              </div>
              <div className="p-10">
                <p className="font-bold text-blue-800 pb-5">Armed & Unarmed</p>
                <p>
                  Our fully trained uniformed guards are available armed and
                  unarmed, 24 hours a day, 7 days a week. All of our security
                  guards are 100% certified.
                </p>
              </div>
            </div>
            <div className=" text-black w-full h-full">
              <div className="bg-computer-image bg-center p-36 bg-no-repeat"></div>
            </div>
            <div>
              <div className="p-5">
                <p className="font-bold text-blue-800 pb-5">
                  Trained & Certified
                </p>
                <p>
                  Our security guards are put through rigorous training to
                  handle any security post assigned to them. Our guards are
                  CPR/AED/First Aid certified.
                </p>
              </div>
              <div className="p-10">
                <p className="font-bold text-blue-800 pb-5">Custom Solutions</p>
                <p>
                  At XpressGuards, we provide professional security solutions
                  customized to fit each individual client and business. Call
                  now to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 text-black border-2 mt-10">
          <div className="border-2 bg-blue-500 p-14">
            <p className="text-white font-extrabold text-4xl">3457</p>
            <p>Clients Protected</p>
          </div>
          <div className="border-2 bg-blue-500 p-14">
            <p className="text-white font-extrabold text-4xl">34</p>
            <p>Years of Experience</p>
          </div>
          <div className="border-2 bg-blue-500 p-14">
            <p className="text-white font-extrabold text-4xl">614</p>
            <p>Office Locations</p>
          </div>
          <div className="border-2 bg-blue-500 p-14">
            <p className="text-white font-extrabold text-4xl">50</p>
            <p>States Served</p>
          </div>
        </div>
        <div>111</div>
        <div className=" text-black p-10">
          <div className="bg-guard-background bg-center p-36 bg-no-repeat"></div>
        </div>
        <div className="">
          <p className="text-black font-extrabold text-4xl">Testimonials</p>
          <div className="py-10">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </main>
  );
};
export default AboutXPressGuardsPage;
