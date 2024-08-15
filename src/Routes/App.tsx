import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutXPressGuardsPage from '../Pages/AboutXPressGuardsPage';
import ContactUsPage from '../Pages/ContactUsPage';
import BodyguardTrainingPage from '../Pages/BodyguardTrainingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/guard" element={<AboutXPressGuardsPage />} />
        <Route path="/training" element={<BodyguardTrainingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
