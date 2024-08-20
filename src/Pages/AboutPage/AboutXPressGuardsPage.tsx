import React from 'react';
import HeaderInPageHome from '../../Components/ShareComponents/HeaderInPageHome';
import MissionStatementAndServices from '../../Components/AboutXPressGuardsComponents/MissionStatementAndServices';
import ServiceDetails from '../../Components/AboutXPressGuardsComponents/ServiceDetails';
import Achievements from '../../Components/AboutXPressGuardsComponents/Achievements';
import TestimonialsCarousel from '../../Components/ShareComponents/TestimonialsCarousel';

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
      <div className="text-black p-10">
        <div className="bg-guard-background bg-center p-36 bg-no-repeat"></div>
      </div>
      <TestimonialsCarousel />
    </main>
  );
};

export default AboutXPressGuardsPage;
