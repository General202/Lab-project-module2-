import { useState } from "react";

export default function BookingForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email) {
      alert("Заповни всі поля");
      return;
    }

    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Ім'я" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Телефон" onChange={e => setForm({...form, phone: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />

      <button type="submit">Забронювати</button>
    </form>
  );
}