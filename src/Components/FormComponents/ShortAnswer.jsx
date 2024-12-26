import React from 'react';

const ShortAnswer = ({ question }) => (
  <div className="text-gray-300 border-2 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 shadow-2xl rounded-lg p-6 mb-4 w-fit max-w-screen md:w-96 mx-auto ">
    <h2 className="text-xl font-semibold mb-4">Short Answer Question</h2>
    <form>
      <label className="block mb-2">{question}</label>
      <input
        type="text"
        className="border p-2 w-full rounded bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1"
        placeholder="Type your answer here..."
      />
    </form>
  </div>
);

export default ShortAnswer;