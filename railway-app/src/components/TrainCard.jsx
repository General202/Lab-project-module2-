export default function TrainCard({ train }) {
  return (
    <div className="card">
      <h3>{train.number}</h3>
      <p>{train.from} → {train.to}</p>
      <p>Відправлення: {new Date(train.departure).toLocaleString()}</p>
      <p>Тривалість: {train.duration}</p>
    </div>
  );
}