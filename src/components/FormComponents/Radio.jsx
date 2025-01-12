const Radio = ({ question, options, onChange }) => {
  const handleChange = (event) => {
    console.log('Radio change:', event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="text-gray-300 border-gray-700 border bg-gray-800/50 bg-clip-padding backdrop-filter backdrop-blur-sm border-gray-100p-1 shadow-lg shadow-black rounded-lg p-6 mb-4 w-full max-w-screen md:w-96 mx-auto">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <form>
        <label className="block mb-2 text-gray-400">Select an option</label>
        <div>
          {options.map((option, index) => (
            <label key={index} className="flex items-center mb-2">
              <input type="radio" name="radio" className="mr-2 accent-violet-700" onChange={handleChange} value={option} /> {option}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Radio;