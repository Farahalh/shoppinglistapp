import React from 'react';

import ItemListPage from './ItemListPage';
import Header from './Header';

function WelcomeScreen() {
    return (
      <div className="WelcomeScreen flex flex-col items-center justify-center min-h-screen border border-gray-300 p-9">
        <Header />
        <ItemListPage />
      </div>
    );
  }
  
  export default WelcomeScreen;


