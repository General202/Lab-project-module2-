import { useState } from "react";
import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";
import { saveBooking } from "../services/BookingService";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";


export default function Booking() {
    const [wagon, setWagon] = useState(1);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSeat = (seat) => {
        setSelectedSeats(prev =>
            prev.includes(seat)
                ? prev.filter(s => s !== seat)
                : [...prev, seat]
        );
    };

    const { trainId } = useParams();

    const handleBooking = (form) => {
        saveBooking({
            trainId: Number(trainId), 
            wagon,
            seats: selectedSeats,
            ...form
        });

        toast.success("Квитки заброньовано!");
        setSelectedSeats([]);
    };

    return (
        <div>
            <h1>Бронювання</h1>

            <WagonSelector selected={wagon} onSelect={setWagon} />

            <SeatMap
                selectedSeats={selectedSeats}
                onToggle={toggleSeat}
            />

            <BookingForm onSubmit={handleBooking} />
        </div>
    );
}