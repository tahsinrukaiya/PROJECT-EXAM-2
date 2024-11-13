import { API_URLS } from "../config";
import { API_KEY } from "../config";

const url = API_URLS.CREATE_BOOKING;
const apiKey = API_KEY;
console.log("the url to create a booking " + url);

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
            throw new Error("Failed to create booking.");
        }

        const data = await response.json();
        console.log(data);
        console.log("Booking created successfully!");
        return { success: true, data };
    } catch (error) {
        console.error("Error creating booking:", error);
        return { success: false, error: error.message };
    }
}

export default bookVenue;
