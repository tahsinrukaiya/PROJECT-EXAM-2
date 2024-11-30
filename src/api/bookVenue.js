import { API_URLS } from "../config";
import { API_KEY } from "../config";

const url = API_URLS.CREATE_BOOKING;
const apiKey = API_KEY;

async function bookVenue({ dateFrom, dateTo, guests, venueId, token }) {
    try {
        const response = await fetch(API_URLS.CREATE_BOOKING, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                "X-Noroff-API-Key": apiKey,
            },
            body: JSON.stringify({
                dateFrom,
                dateTo,
                guests,
                venueId,
            }),
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            if (response.status === 409) {
                throw new Error("You have already booked this venue.");
            }
            throw new Error(errorDetails.message || "Failed to create booking.Please select dates and guest number");
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export default bookVenue;
