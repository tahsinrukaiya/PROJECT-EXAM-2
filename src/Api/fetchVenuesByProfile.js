import { API_URLS } from "../config";
import { API_KEY } from "../config";

export async function fetchVenuesByProfile(name, token) {
    const url = `${API_URLS.ALL_VENUES_BY_PROFILE}${name}/venues`;
    const apiKey = API_KEY;

    try {
        const response = await fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    "X-Noroff-API-Key": apiKey,
                }
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch venues.');
        }
        const venuesByProfile = await response.json();
        console.log(venuesByProfile);
        return venuesByProfile;
    } catch (err) {
        throw new Error(err.message);
    }
};

