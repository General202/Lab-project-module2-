export default function WagonSelector({ selected, onSelect }) {
  const wagons = [1, 2, 3];

  return (
    <div>
      <h3>Вибір вагона</h3>
      {wagons.map(w => (
        <button
          key={w}
          onClick={() => onSelect(w)}
          style={{
            margin: 5,
            background: selected === w ? "blue" : "gray",
            color: "white"
          }}
        >
          {w}
        </button>
      ))}
    </div>
  );
}