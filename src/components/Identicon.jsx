
// Function to generate a consistent hash from a number
const generateHash = (seed) => {
  let hash = [];
  for (let i = 0; i < 15; i++) {
    hash.push((seed * (i + 17)) % 255); // Generate pseudo-random values
  }
  return hash;
};

// Component to render the identicon
const Identicon = ({ seed, size = 5, squareSize = 20 }) => {
  const hash = generateHash(seed);
  const grid = Array(size)
    .fill(null)
    .map((_, rowIndex) =>
      Array(size)
        .fill(null)
        .map((_, colIndex) => {
          const mirroredColIndex = colIndex < Math.ceil(size / 2) ? colIndex : size - colIndex - 1;
          return hash[(rowIndex * Math.ceil(size / 2) + mirroredColIndex) % hash.length] % 2 === 0;
        })
    );

  return (
    <div
      className="inline-block"
      style={{
        width: size * squareSize,
        height: size * squareSize,
      }}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`${
                cell ? 'bg-green-500' : 'bg-gray-100'
              }`}
              style={{
                width: squareSize,
                height: squareSize,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Identicon;
