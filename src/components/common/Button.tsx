import React from 'react';

interface ButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  return (
    <button 
      className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring focus:border-blue-300" 
      type="submit" 
      value={label}
    >
      {label}
    </button>
  );
}

export default Button;
