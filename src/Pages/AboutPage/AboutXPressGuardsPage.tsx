import React from 'react';
import HeaderInPageHome from '../../Components/ShareComponents/HeaderInPageHome';
import MissionStatementAndServices from '../../Components/AboutXPressGuardsComponents/MissionStatementAndServices';
import ServiceDetails from '../../Components/AboutXPressGuardsComponents/ServiceDetails';
import Achievements from '../../Components/AboutXPressGuardsComponents/Achievements';
import TestimonialsCarousel from '../../Components/ShareComponents/TestimonialsCarousel';
import Security from '../../Components/AboutXPressGuardsComponents/Security';
import ButtonBlue from '../../Components/ShareComponents/ButtonBlue';

const AboutXPressGuardsPage: React.FC = () => {
  return (
    <main className="bg-white m-0 p-0">
      <HeaderInPageHome
        title={'About XPressGuards'}
        subtitle={'About XPressGuards'}
        page={'Home'}
      />
      <MissionStatementAndServices />
      <ServiceDetails />
      <Achievements
        clientsProtected={3457}
        yearsOfExperience={34}
        officeLocations={614}
        statesServed={50}
      />
      <Security />
      <div className="px-40">
        <TestimonialsCarousel />
      </div>
      <div className="flex justify-center py-5">
        <ButtonBlue buttonText="(866) 407-4342 ->" />
      </div>
    </main>
  );
};

export default AboutXPressGuardsPage;
