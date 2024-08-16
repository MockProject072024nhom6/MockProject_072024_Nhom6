import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutXPressGuardsPage from './Pages/AboutXPressGuardsPage';
import ContactUsPage from './Pages/ContactUsPage';
import BodyguardTrainingPage from './Pages/BodyguardTrainingPage';
import PriceServicesPage from './Pages/PriceServicesPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/guard" element={<AboutXPressGuardsPage />} />
        <Route path="/training" element={<BodyguardTrainingPage />} />
        <Route path="/price" element={<PriceServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
