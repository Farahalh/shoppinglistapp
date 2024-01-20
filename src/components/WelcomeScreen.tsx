import React from 'react';
import EmptyStateImg from '../images/emptystate-stevengaan.png';
import ItemPage from './ItemPage';
import Header from './Header';

function WelcomeScreen() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center border border-gray-300 p-8">
        <Header />
        <img className='w-40 md:w-56 lg:w-72 max-w-full h-auto mb-5' src={EmptyStateImg} alt='emptyState'/>
        <h4 className='text-lg'>No List Yet</h4>
        <p className='text-sm'>Create Your List Here</p>
        <ItemPage />
      </div>
    );
  }
  
  export default WelcomeScreen;


