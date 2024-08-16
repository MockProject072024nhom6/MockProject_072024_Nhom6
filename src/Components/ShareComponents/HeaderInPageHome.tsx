import { I_props_HeaderInPageHome } from '../../Types/GuardTypes';
const HeaderInPageHome: React.FC<I_props_HeaderInPageHome> = ({
  title,
  page,
  subtitle,
}) => {
  return (
    <section>
      <div className=" text-black mb-10 ">
        <div className="bg-header-background bg-center  p-36 ">
          <div className="text-4xl font-extrabold text-blue-800 mb-6 ">
            {title}
          </div>
          <div className="flex">
            <div className="text-lg text-white">{page} </div>
            <div className="text-lg text-blue-800">{subtitle}</div>
          </div>
        </div>
        <h3 className="text-4xl font-bold text-blue-800 mb-6"></h3>
      </div>
    </section>
  );
};
export default HeaderInPageHome;