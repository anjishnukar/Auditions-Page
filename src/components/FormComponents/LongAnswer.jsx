import React from 'react';

const LongAnswer = ({ question }) => (
  <div className="text-gray-300 border-gray-700 border bg-gray-800/50 bg-clip-padding backdrop-filter backdrop-blur-sm shadow-lg shadow-black rounded-lg p-6 mb-4 w-full max-w-screen md:w-96 mx-auto ">
    <label className="text-xl font-semibold mb-4" htmlFor={question}>{question}</label>
    <textarea
        className="border-b focus:border-violet-500 p-2 w-full rounded bg-transparent outline-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 accent-violet-500"
        rows="3"
        placeholder="Type your answer here..."
      ></textarea>
  </div>
);

export default LongAnswer;