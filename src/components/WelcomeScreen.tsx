import React from 'react';
import HomePage from './HomePage';
import Header from './common/Header';

function WelcomeScreen() {
    return (
      <div className="WelcomeScreen flex flex-col items-center justify-center min-h-screen border border-gray-300 p-9">
        <Header />
        <HomePage />
      </div>
    );
  }
  
  export default WelcomeScreen;


