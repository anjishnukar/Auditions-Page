const Checkbox = ({ question, options, onChange }) => {
  const handleChange = (event) => {
    console.log('Checkbox change:', event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="text-gray-300 border-2 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 shadow-md rounded-lg p-6 mb-4 w-fit max-w-screen md:w-96 mx-auto">
      <h2 className="text-xl font-semibold mb-4">Checkbox Question</h2>
      <form>
        <label className="block mb-2">You can choose multiple options</label>
        <div>
          {options.map((option, index) => (
            <label key={index} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" onChange={handleChange} /> {option}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Checkbox;