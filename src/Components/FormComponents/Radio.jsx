import React from 'react';

const Radio = ({ question, options }) => (
  <div className="text-gray-300 border-2 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 shadow-md rounded-lg p-6 mb-4 w-fit max-w-screen md:w-96 mx-auto ">
    <h2 className="text-xl font-semibold mb-4">Radio Question</h2>
    <form>
      <label className="block mb-2">{question}</label>
      <div>
        {options.map((option, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="radio" name="radio" className="mr-2" /> {option}
          </label>
        ))}
      </div>
    </form>
  </div>
);

export default Radio;