import React, { useState } from 'react';

const SliderForm = ({question}) => {
  const [sliderValue, setSliderValue] = useState(5); 

  
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="text-gray-300 border-gray-700 border bg-gray-800/50 bg-clip-padding backdrop-filter backdrop-blur-sm border-gray-100p-1 shadow-lg shadow-black rounded-lg p-6 mb-4 w-full max-w-screen md:w-96 mx-auto ">
      <h2 className="text-xl font-semibold">{question}</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="experience" className="block text-lg font-medium">
            Rate yourself out of (1-10)
          </label>
          <input
            id="experience"
            type="range"
            min="1"
            max="10"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none focus:outline-none"
          />
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">1</span>
            <span className="text-gray-400">10</span>
          </div>
        </div>

        <div className="flex justify-center">
          <span className="text-xl font-medium text-gray-400">{sliderValue}</span>
        </div>
      </form>
    </div>
  );
};

export default SliderForm;
