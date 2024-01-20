import React from 'react';

function CircularButton() {
  return (
    <button className="bg-blue-500 text-white rounded-full p-4 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </button>
  );
}

export default CircularButton;
