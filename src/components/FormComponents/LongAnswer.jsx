import React from 'react';

const LongAnswer = ({ question }) => (
  <div className="text-gray-300 border-2  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 shadow-md rounded-lg p-6 mb-4 w-full max-w-screen md:w-96 mx-auto ">
    <h2 className="text-xl font-semibold mb-4">{question}</h2>
    <form>
      <label className="block mb-2">Write a long answer</label>
      <textarea
        className="border p-2 w-full rounded bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1"
        rows="4"
        placeholder="Type your answer here..."
      ></textarea>
    </form>
  </div>
);

export default LongAnswer;