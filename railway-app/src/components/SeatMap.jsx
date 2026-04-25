export default function SeatMap({ selectedSeats, onToggle }) {
  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 60px)",
      gap: 10
    }}>
      {seats.map(seat => {
        const isSelected = selectedSeats.includes(seat);

        return (
          <div
            key={seat}
            onClick={() => onToggle(seat)}
            style={{
              width: 60,
              height: 60,
              background: isSelected ? "blue" : "green",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            {seat}
          </div>
        );
      })}
    </div>
  );
}