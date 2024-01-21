import React from 'react';

function Button() {
  return (
    <input 
    className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300" 
    type="submit" 
    value={"+"}/>
  );
}

export default Button;
