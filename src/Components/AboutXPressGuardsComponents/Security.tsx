import ButtonBlue from '../ShareComponents/ButtonBlue';
const Security = () => {
  return (
    <div>
      <div className="text-white pb-10">
        <div className="bg-guard-background w-full bg-center py-52 md:py-60">
          <div className="px-32">
            <h2 className="text-blue-500 font-extrabold">XPressGuards</h2>
            <h1 className="font-extrabold py-3">Security You Can Trust</h1>
            <p className="pb-10">
              We’re available 24/7 in all 50 states. We service private clients,
              <br />
              small businesses and large corporations. Contact us now!
            </p>
            <ButtonBlue buttonText={'Contact Us ->'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Security;
