import { API_URLS } from "../config";
import { API_KEY } from "../config";

export async function deleteVenue(venueData, onDeleteSuccess) {
    const token = localStorage.getItem("accessToken");
    const apiKey = API_KEY;

    if (!token) {
        throw new Error("Token not found!");
    }

    try {
        const { id } = venueData;

        if (!id) {
            throw new Error('Venue ID is missing');
        }
        const checkVenueExistence = async (venueId) => {
            try {
                const response = await fetch(`${API_URLS.DELETE_VENUE}${venueId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'X-Noroff-API-Key': apiKey
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    return data;
                } else {
                    console.error('Venue not found on the server:', response.statusText);
                    return null;
                }
            } catch (error) {
                console.error('Error fetching venue:', error);
                throw error;
            }
        };
        const venue = await checkVenueExistence(id);
        if (!venue) {
            throw new Error('Venue not found. It may have already been deleted.');
        }

        const url = `${API_URLS.DELETE_VENUE}${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'X-Noroff-API-Key': apiKey,
            },
        });

        if (response.status === 204) {
            if (onDeleteSuccess) {
                onDeleteSuccess();
            }
            return;
        }

        if (response.status === 404) {
            throw new Error("Venue not found. It may have already been deleted.");
        }
        if (response.status === 403) {
            throw new Error("You do not have permission to delete this venue.");
        }

        if (!response.ok) {
            throw new Error(`Failed to delete venue: ${response.statusText}`);
        }

    } catch (error) {
        console.error('Error deleting venue:', error);
        throw error;
    }
}
