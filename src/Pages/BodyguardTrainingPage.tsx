import React from 'react';
import TrainingInfo from '../Components/BodyguardTrainingComponents/TrainingInfo';
import CourseDetails from '../Components/BodyguardTrainingComponents/CourseDetails';
import TestimonialsSection from '../Components/BodyguardTrainingComponents/TestimonialsSection';
import HeaderInPageHome from '../Components/ShareComponents/HeaderInPageHome';

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
      <TestimonialsSection />
    </div>
  );
};

export default BodyguardTrainingPage;
