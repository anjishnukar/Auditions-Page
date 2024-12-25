const Terminal = ({ lines }) => {
  return (
    <div
      className="bg-black text-green-500 font-mono p-4 rounded-lg shadow-md"
    >
      {lines.map((line, index) => (
        <div key={index} className="whitespace-pre-wrap">
          {line}
        </div>
      ))}
    </div>
  );
};

export default Terminal;
