const LongAnswer = ({ question, onChange }) => {
  const handleChange = (event) => {
    console.log('LongAnswer change:', event.target.value);
    onChange(event.target.value);
  };

  return (<div className="text-gray-300 border-2 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 shadow-md rounded-lg p-6 mb-4 w-fit max-w-screen md:w-96 mx-auto ">
    <h2 className="text-xl font-semibold mb-4">Long Answer Question</h2>
      <label className="block mb-2">{question}</label>
      <textarea
        className="border p-2 w-full rounded bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1"
        rows="4"
        placeholder="Type your answer here..."
        onChange={handleChange}
      ></textarea>
  </div>
  );
};

export default LongAnswer;