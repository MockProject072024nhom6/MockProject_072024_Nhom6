import React from 'react';
import TrainingInfo from '../../Components/BodyguardTrainingComponents/TrainingInfo';
import CourseDetails from '../../Components/BodyguardTrainingComponents/CourseDetails';
import TestimonialsSection from '../../Components/BodyguardTrainingComponents/TestimonialsSection';
import HeaderInPageHome from '../../Components/ShareComponents/HeaderInPageHome';
import ButtonBlue from '../../Components/ShareComponents/ButtonBlue';
const BodyguardTrainingPage: React.FC = () => {
  return (
    <div>
      <HeaderInPageHome
        title={'Bodyguard Training Class'}
        subtitle={'Bodyguard Training Class'}
        page={'Home'}
      />
      <TrainingInfo />
      <hr />
      <CourseDetails />
      <hr />
      <div className="px-40">
        <TestimonialsSection />
      </div>
      <div className="flex justify-center py-5">
        <ButtonBlue buttonText="(866) 407-4342 ->" />
      </div>
    </div>
  );
};

export default BodyguardTrainingPage;
