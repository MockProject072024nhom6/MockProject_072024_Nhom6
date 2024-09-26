import { I_props_Achievements } from '../../Types/GuardTypes';

const Achievements: React.FC<I_props_Achievements> = ({
  clientsProtected,
  yearsOfExperience,
  officeLocations,
  statesServed,
}) => {
  return (
    <div className="grid grid-cols-4 text-black border-2 mt-10 text-center">
      <div className="border-2 bg-blue-500 p-14">
        <p className="text-white font-extrabold text-4xl">{clientsProtected}</p>
        <p>Clients Protected</p>
      </div>
      <div className="border-2 bg-blue-500 p-14">
        <p className="text-white font-extrabold text-4xl">
          {yearsOfExperience}
        </p>
        <p>Years of Experience</p>
      </div>
      <div className="border-2 bg-blue-500 p-14">
        <p className="text-white font-extrabold text-4xl">{officeLocations}</p>
        <p>Office Locations</p>
      </div>
      <div className="border-2 bg-blue-500 p-14">
        <p className="text-white font-extrabold text-4xl">{statesServed}</p>
        <p>States Served</p>
      </div>
    </div>
  );
};
export default Achievements;
