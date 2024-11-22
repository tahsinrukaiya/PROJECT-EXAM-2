import { API_URLS } from "../config";

const fetchVenues = async () => {

    try {
        const response = await fetch(API_URLS.ALL_VENUES);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching venues:', error);
        throw error;
    }
};

export default fetchVenues;
