import { useState, useEffect } from "react";
import { updateVenue } from "@api/updateVenue";

export default function UpdateVenueForm() {
    const [successMessage, setSuccessMessage] = useState("");
    const [venueData, setVenueData] = useState({
        name: "",
        location: {
            address: "",
        },
        description: "",
        imageUrl: "",
        price: 0,
        maxGuests: 0,
        wifi: false,
        parking: false,
        breakfast: false,
        pets: false,
    });

    useEffect(() => {
        const storedVenue = JSON.parse(localStorage.getItem('selectedVenue'));
        if (storedVenue) {
            const mediaUrl = storedVenue.media && storedVenue.media.length > 0 ? storedVenue.media[0].url : '';
            setVenueData({
                ...storedVenue,
                imageUrl: mediaUrl,
                location: storedVenue.location || { address: "" },
            });
        }
    }, []);

    const handleFormChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            setVenueData({
                ...venueData,
                [name]: checked,
            });
        } else if (name === "location.address") {
            setVenueData({
                ...venueData,
                location: {
                    ...venueData.location,
                    address: value,
                },
            });
        } else if (name === "maxGuests" || name === "price") {
            setVenueData({
                ...venueData,
                [name]: Number(value),
            });
        } else {
            setVenueData({
                ...venueData,
                [name]: value,
            });
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!venueData.name || !venueData.location.address || !venueData.price || isNaN(venueData.maxGuests)) {
            alert("Please fill in all required fields and ensure maxGuests is a number.");
            return;
        }
        try {
            const updatedVenue = await updateVenue(venueData);
            if (updatedVenue) {
                setSuccessMessage('Venue updated successfully!');

                console.log('Success message set:', successMessage);

                setVenueData(updatedVenue);
                localStorage.setItem('selectedVenue', JSON.stringify(updatedVenue));
                setTimeout(() => {
                    window.location.href = "/profile";
                }, 2000);
            } else {
                throw new Error('Failed to update venue');
            }
        } catch (error) {
            console.error('Error updating venue:', error);
            alert('Error updating venue');
        }
    };

    if (!venueData) return <div>Loading...</div>;

    return (
        <div className="form-container d-flex justify-content-center align-items-center vh-50 mt-5">
            {successMessage && (
                <div className="successMessage">
                    {console.log(successMessage)}
                    {successMessage}

                </div>
            )}
            <div className="col-10 col-md-6 col-lg-6">
                <form className="lease-venue-form rounded mb-3 mt-3 p-5" onSubmit={handleFormSubmit}>
                    <h1 className="heading-one text-center">Update your venue</h1>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={venueData.name}
                            onChange={handleFormChange}
                            placeholder="Venue Name"
                            required
                        />
                        <label htmlFor="location.address" className="form-label">Location</label>
                        <input
                            type="text"
                            name="location.address"
                            className="form-control"
                            value={venueData.location.address}
                            onChange={handleFormChange}
                            placeholder="Location of the venue"
                            required
                        />
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            name="description"
                            className="form-control"
                            value={venueData.description}
                            onChange={handleFormChange}
                            placeholder="Description of the venue"
                        />
                        <label htmlFor="imageUrl" className="form-label">Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            className="form-control"
                            value={venueData.imageUrl}
                            onChange={handleFormChange}
                            placeholder="URL of the venue image"
                        />
                        <label htmlFor="price" className="form-label">Price per night</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            value={venueData.price}
                            onChange={handleFormChange}
                            placeholder="Price in NOK"
                            required
                        />
                        <label htmlFor="maxGuests" className="form-label">Maximum number of guests</label>
                        <input
                            type="number"
                            name="maxGuests"
                            className="form-control"
                            value={venueData.maxGuests}
                            onChange={handleFormChange}
                            placeholder="Number of guests"
                            required
                        />
                        <label className="mt-3 mb-3">Facilities</label>
                        <div className="d-flex flex-row bd-highlight mb-3 meta-options">
                            <div className="p-2">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    name="wifi"
                                    checked={venueData.wifi}
                                    onChange={handleFormChange}
                                />
                                <label className="form-check-label">Wifi</label>
                            </div>
                            <div className="p-2">
                                <input
                                    className="form-check-input mx-2"
                                    type="checkbox"
                                    name="parking"
                                    checked={venueData.parking}
                                    onChange={handleFormChange}
                                />
                                <label className="form-check-label">Parking</label>
                            </div>
                            <div className="p-2">
                                <input
                                    className="form-check-input mx-2"
                                    type="checkbox"
                                    name="breakfast"
                                    checked={venueData.breakfast}
                                    onChange={handleFormChange}
                                />
                                <label className="form-check-label">Breakfast</label>
                            </div>
                            <div className="p-2">
                                <input
                                    className="form-check-input mx-2"
                                    type="checkbox"
                                    name="pets"
                                    checked={venueData.pets}
                                    onChange={handleFormChange}
                                />
                                <label className="form-check-label">Pets</label>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="rounded-pill px-2 pt-2 pb-2 mt-2 lease-form-btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
