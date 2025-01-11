import React from 'react';

const Checkbox = ({ question, options }) => (
  <div className="text-gray-300 border-2 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border-gray-100p-1 shadow-black rounded-lg p-6 mb-4 max-w-screen md:w-96 mx-auto shadow-lg border-white/50 border-r-white/20 border-b-white/20">
    <h2 className="text-xl font-semibold mb-4">{question}</h2>
    <form>
      <label className="block mb-2">You can choose multiple options</label>
      <div>
        {options.map((option, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" /> {option}
          </label>
        ))}
      </div>
    </form>
  </div>
);

export default Checkbox;