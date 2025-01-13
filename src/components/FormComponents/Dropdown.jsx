const Dropdown = ({ question, options, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="text-gray-300 border-gray-700 border bg-gray-800/50 bg-clip-padding backdrop-filter backdrop-blur-sm border-gray-100p-1 shadow-lg shadow-black rounded-lg p-6 mb-4 w-full max-w-screen md:w-96 mx-auto">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <form>
        <select
          onChange={handleChange}
          className="w-full bg-gray-800/50 bg-clip-padding backdrop-filter backdrop-blur-sm text-white border border-gray-500 rounded-md p-2 outline-none focus:border-purple-500"
        >
          <option value="" className="text-white" disabled selected>
            Choose any one
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Dropdown;
