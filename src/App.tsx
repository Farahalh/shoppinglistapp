import React from 'react';
import './styles/App.css';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='bg-white shadow-md p-8 rounded-md'>
        <WelcomeScreen />
      </div>
    </div>
  );
}

export default App;

