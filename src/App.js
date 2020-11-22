import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EditPage from './pages/EditPage';

function App() {
  return (
    <div>
      <Navbar />
      <EditPage />
      <Footer />
    </div>
  );
}

export default App;
