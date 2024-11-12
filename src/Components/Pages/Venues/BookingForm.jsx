import React from 'react';
import { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
export default function BookingForm() {

    // Initialize Flatpickr
    useEffect(() => {
        flatpickr("#datePicker", {
            dateFormat: "Y-m-d",
            enableTime: "false",
        });
    }, []); // Runs once when the component mounts

    return (
        <div className="d-flex book-form-container border justify-content-center mt-5 pt-3 pb-3">
            <form className="d-flex booking-form">
                <div className="form-group p-2 flex-fill bd-highlight">
                    <label htmlFor="datePicker"><h6>Date from</h6></label>
                    <input type="text" className="form-control" id="datePicker" placeholder="Select a date" required />
                </div>
                <div className="form-group p-2 flex-fill bd-highlight">
                    <label htmlFor="datePicker"><h6>Date to</h6></label>
                    <input type="text" className="form-control" id="datePicker" placeholder="Select a date" required />
                </div>
                <div className="form-group p-2 flex-fill bd-highlight">
                    <label htmlFor="formGroupExampleInput"><h6>Number of guests</h6></label>
                    <input type="number" min="1" className="form-control" id="formGroupExampleInput" placeholder="number of guests" required />
                </div>
                <button type="submit" className="book-btn rounded-pill mt-3 mb-3">Book now</button>
            </form>
        </div>)
}
