const Dropdown = ({ question, options, onChange }) => {
  const handleChange = (event) => {
    console.log('Dropdown change:', event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="text-gray-300 border-2 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 p-6 shadow-md rounded-lg mb-4 w-fit max-w-screen md:w-96 mx-auto">
      <h2 className="text-xl font-semibold mb-4">Dropdown Question</h2>
      <form>
        <label className="block mb-2">{question}</label>
        <select
          onChange={handleChange}
          className="w-full bg-gray-700 text-white border border-gray-500 rounded-md p-2 outline-none focus:border-purple-500"
        >
          <option value="" disabled selected>
            Select an option
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
