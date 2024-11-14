import React, { useEffect, useState, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import bookVenue from "../../../api/bookVenue";

export default function BookingForm({ venueId, bookings, maxGuests }) {
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [guests, setGuests] = useState(1);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const token = localStorage.getItem("accessToken");

    const dateFromRef = useRef(null);
    const dateToRef = useRef(null);

    const getDisabledDates = () => {
        return bookings.map((booking) => {
            const dateFrom = new Date(booking.dateFrom);
            const dateTo = new Date(booking.dateTo);
            let dates = [];
            for (let d = new Date(dateFrom); d <= dateTo; d.setDate(d.getDate() + 1)) {
                dates.push(d.toISOString().split("T")[0]);
            }
            return dates;
        }).flat();
    };

    useEffect(() => {
        const disabledDates = getDisabledDates();

        flatpickr(dateFromRef.current, {
            dateFormat: "Y-m-d",
            disable: disabledDates,
            onChange: (selectedDates) => setDateFrom(selectedDates[0]),
        });

        flatpickr(dateToRef.current, {
            dateFormat: "Y-m-d",
            disable: disabledDates,
            onChange: (selectedDates) => setDateTo(selectedDates[0]),
        });
    }, [bookings]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        if (!token) {
            setError("You must be logged in to book a venue!");
            return;
        }

        if (guests > maxGuests) {
            setError("You have exceeded the maximum number of guests!");
            return;
        }

        const result = await bookVenue({ dateFrom, dateTo, guests, venueId, token });

        if (result.success) {
            setSuccessMessage("Booking created successfully!");
        } else {
            setError(result.error || "Booking failed.");
        }
    };

    const handleGuestsChange = (e) => {
        const value = Math.max(1, e.target.value);
        setGuests(value);
    };

    return (
        <div className="d-flex book-form-container border justify-content-center mt-5 pt-3 pb-3">
            {error && <div className="error-message"><h6>{error}</h6></div>}
            {!error && successMessage && <div className="success-message"><h6 className="success-message pt-2">{successMessage}</h6></div>}
            <form className="d-flex booking-form" onSubmit={handleSubmit}>
                <div className="form-group p-2 flex-fill bd-highlight">
                    <label htmlFor="dateFromPicker"><h6>Date from</h6></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Select a date"
                        required
                        ref={dateFromRef}
                    />
                </div>
                <div className="form-group p-2 flex-fill bd-highlight">
                    <label htmlFor="dateToPicker"><h6>Date to</h6></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Select a date"
                        required
                        ref={dateToRef}
                    />
                </div>
                <div className="form-group p-2 flex-fill bd-highlight">
                    <label htmlFor="guestsInput"><h6>Number of guests</h6></label>
                    <input
                        type="number"
                        min="1"
                        className="form-control"
                        id="guestsInput"
                        placeholder="Number of guests"
                        value={guests}
                        onChange={handleGuestsChange}
                        required
                    />
                </div>
                <button type="submit" className="book-btn rounded-pill mt-3 mb-3">Book now</button>
            </form>
        </div>
    );
}

