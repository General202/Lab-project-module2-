const KEY = "bookings";

export const saveBooking = (booking) => {
  const data = JSON.parse(localStorage.getItem(KEY)) || [];
  data.push(booking);
  localStorage.setItem(KEY, JSON.stringify(data));
};

export const getBookedSeatsCount = (trainId) => {
  try {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    let count = 0;

    bookings.forEach(b => {
      if (Number(b.trainId) === Number(trainId)) {
        count += (b.seats || []).length;
      }
    });

    return count;
  } catch (e) {
    return 0;
  }
};