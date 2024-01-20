import React from 'react';
import EmptyStateImg from '../images/emptystate-stevengaan.png';
import ItemPage from './ItemPage';

function WelcomeScreen() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center border border-gray-300 p-8">
        <h1 className='text-3xl font-bold py-6'>Shopping List</h1>
        <img className='w-40 md:w-56 lg:w-72 max-w-full h-auto mb-5' src={EmptyStateImg} alt='emptyState'/>
        <h4 className='text-lg'>No List Yet</h4>
        <p className='text-sm'>Create Your List Here</p>
        <ItemPage />
      </div>
    );
  }
  
  export default WelcomeScreen;


