import React from 'react';
import logo from './filterez-logo.png';
import './App.css';

import NavbarWithInstructions from './components/NavbarWithInstructions';
import Footer from './components/Footer';
import EditPage from './pages/EditPage';


function getSteps() {
  return ['Select Your Image', 'Apply CSS Filters on Your Image', 'Save Your Image'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `To try out the tool you can choose one of the example images on the right button or you can upload an image from your computer with the left butotn.`;
    case 1:
      return 'Filters are set to show the default image. Choose the CSS Filter you want to change certain attributes.';
    case 2:
      return `If in chrome, right-click and select save image as to save it to your computer`;
    default:
      return 'Unknown step';
  }
}

function App() {
  return (
    <div>
      <NavbarWithInstructions logo={logo} getSteps={getSteps} getStepContent={getStepContent} />
      <EditPage />
      <Footer />
    </div>
  );
}

export default App;
