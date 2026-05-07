import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      {currentPage === 'welcome' && (
        <WelcomePage onNavigate={handleNavigate} />
      )}
      {/* Additional pages will go here as you provide their designs */}
    </div>
  );
}

export default App;
