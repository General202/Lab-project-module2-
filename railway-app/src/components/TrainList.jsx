import { useState } from "react";
import TrainCard from "./TrainCard";
import { trains } from "../data/trains";

export default function TrainList() {
  const [search, setSearch] = useState("");

  const filtered = trains.filter(train =>
    train.number.toLowerCase().includes(search.toLowerCase()) ||
    `${train.from} ${train.to}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map(train => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
}