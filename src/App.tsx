import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutXPressGuardsPage from './Pages/AboutPage/AboutXPressGuardsPage';
import ContactUsPage from './Pages/ContactPage/ContactUsPage';
import BodyguardTrainingPage from './Pages/AboutPage/BodyguardTrainingPage';
import PriceServicesPage from './Pages/SecurityServices/PriceServicesPage';
import PersonalInformationPage from './Pages/PersonalInformationPage';
import ServiceManagementPage from './Pages/SecurityServices/ServiceManagementPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/guard" element={<AboutXPressGuardsPage />} />
        <Route path="/training" element={<BodyguardTrainingPage />} />
        <Route path="/price" element={<PriceServicesPage />} />
        <Route path="/profile" element={<PersonalInformationPage />} />
        <Route path="/manager" element={<ServiceManagementPage />} />
      </Routes>
    </Router>
  );
}

export default App;
