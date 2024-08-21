import React from 'react';
import guard from '../../assets/images/guard.png';
import ButtonBlack from '../ShareComponents/ButtonBlack';
const TrainingInfo: React.FC = () => {
  return (
    <section>
      <div className="grid grid-flow-row-dense grid-cols-1 mx-32 md:grid-cols-3 text-justify">
        <div className="col-span-2 text-black">
          <p className="py-5 font-extrabold text-blue-800">Classes</p>
          <p className="font-extrabold text-2xl pb-5">
            Florida Class G Firearm License Classes
          </p>
          <p className="font-extrabold pb-5">Course Admission Requirements</p>
          <p className="pb-5">Students must be 18 years of age</p>
          <p className="font-extrabold pb-5">Training Program Objectives</p>
          <p className="pb-5">
            Completion of this course will prepare students entering the
            Security industry ensuring compliance with local state laws.
          </p>
          <p className="font-extrabold pb-5">Course Length</p>
          <p className="pb-5">30 Classroom Hours.</p>
          <p className="pb-5">
            Our security school instructors are all military and law enforcement
            veterans. We bring decades of real-world tactical experience to our
            security classes, nationwide. Unlike many security schools,
            XPressGuards is committed to our students' success, and we provide
            job placement.
          </p>
          <p className="pb-5">Call Now For More Information</p>
        </div>
        <div className="h-full text-black items-center justify-center">
          <img className="p-3" src={guard} alt="Guard Training" />
        </div>
      </div>
      <div className="mx-32 flex justify-between my-5">
        <div>
          <ButtonBlack buttonText={'Call Now'} />
        </div>
        <div>
          <ButtonBlack buttonText={'See More Classes'} />
        </div>
      </div>
    </section>
  );
};

export default TrainingInfo;
