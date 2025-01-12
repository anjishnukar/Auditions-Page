import React from 'react';

const PurpleLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <div className="absolute w-16 h-16 border-4 border-purple-200 rounded-full"></div>
        {/* Spinning ring */}
        <div className="absolute w-16 h-16 border-4 border-purple-500 rounded-full animate-spin border-t-transparent"></div>
        {/* Inner pulsing circle */}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default PurpleLoader;