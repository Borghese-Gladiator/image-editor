import React from 'react';
import logo from './filterez-logo.png';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EditPage from './pages/EditPage';

function App() {
  return (
    <div>
      <Navbar logo={logo} />
      <EditPage />
      <Footer />
    </div>
  );
}

export default App;
