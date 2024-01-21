import React from 'react';
import EmptyStateImg from '../images/emptystate-stevengaan.png';
import ItemListPage from './ItemListPage';
import Header from './Header';

function WelcomeScreen() {
    return (
      <div className="WelcomeScreen flex flex-col items-center justify-center min-h-screen text-center border border-gray-300 p-9">
        <Header />
        <ItemListPage />
        <h4 className='text-lg p-1'>No List Yet</h4>
        <p className='text-sm p-1'>Create Your List Here</p>
        <img className='w-40 md:w-56 lg:w-72 max-w-full h-auto mb-5' src={EmptyStateImg} alt='emptyState'/>
      </div>
    );
  }
  
  export default WelcomeScreen;


