import { useState } from "react";
import { createVenue } from "@api/createVenue";
import SuccessModalCreate from "./successModalCreate";

export default function CreateVenueForm() {
    const [venueData, setVenueData] = useState({
        name: "",
        location: "",
        description: "",
        imageUrl: "",
        price: "",
        maxGuests: "",
        wifi: false,
        parking: false,
        breakfast: false,
        pets: false,
    });

    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "price" || name === "maxGuests") {
            const numericValue = value ? Number(value) : 0;
            setVenueData((prevData) => ({
                ...prevData,
                [name]: numericValue,
            }));
        } else {
            setVenueData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setVenueData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (venueData.price <= 0 || venueData.maxGuests <= 0) {
            setMessage("Price and Max Guests must be greater than zero.");
            setShowModal(true);
            return;
        }

        const venueDataFormatted = {
            name: venueData.name,
            description: venueData.description,
            price: venueData.price,
            maxGuests: venueData.maxGuests,
            media: [{
                url: venueData.imageUrl,
                alt: "Venue image"
            }],
            meta: {
                wifi: venueData.wifi,
                parking: venueData.parking,
                breakfast: venueData.breakfast,
                pets: venueData.pets,
            },
            location: {
                address: venueData.location,
                city: "the city",
                zip: "",
                country: "",
                continent: "",
                lat: 0,
                lng: 0,
            },
        };

        try {
            const response = await createVenue(venueDataFormatted);

            if (response && response.data) {
                const newVenue = response.data;
                const existingVenues = JSON.parse(localStorage.getItem('venues')) || [];
                existingVenues.push(newVenue);
                localStorage.setItem('venues', JSON.stringify(existingVenues));
                setMessage("Venue created successfully!");
                setShowModal(true);

            } else {
                setMessage("There was an error creating the venue. No valid data returned.");
                setShowModal(true);
            }
        } catch (error) {
            console.error("Error creating venue", error);
            setMessage("There was an error creating the venue. Please try again.");
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        window.location.href = "/profile";
    };

    return (
        <div className="form-container d-flex justify-content-center align-items-center vh-50 mt-5">
            <div className="col-10 col-md-6 col-lg-6">
                <form className="lease-venue-form rounded mb-3 mt-3 p-5" onSubmit={handleSubmit}>
                    <h1 className="heading-one text-center">Lease a venue</h1>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={venueData.name}
                            onChange={handleInputChange}
                            placeholder="Venue Name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="form-control"
                            value={venueData.location}
                            onChange={handleInputChange}
                            placeholder="Location of the venue"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            name="description"
                            className="form-control"
                            value={venueData.description}
                            onChange={handleInputChange}
                            placeholder="Description of the venue"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="imageUrl" className="form-label">Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            className="form-control"
                            value={venueData.imageUrl}
                            onChange={handleInputChange}
                            placeholder="URL of the venue image"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price per night</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            value={venueData.price}
                            onChange={handleInputChange}
                            placeholder="Price in NOK"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="maxGuests" className="form-label">Maximum number of guests</label>
                        <input
                            type="number"
                            name="maxGuests"
                            className="form-control"
                            value={venueData.maxGuests}
                            onChange={handleInputChange}
                            placeholder="Number of guests"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="mt-3 mb-3">Facilities</label>
                        <div className="d-flex flex-row bd-highlight mb-3 meta-options">
                            <div className="p-2">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    name="wifi"
                                    checked={venueData.wifi}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="form-check-label">Wifi</label>
                            </div>
                            <div className="p-2">
                                <input
                                    className="form-check-input mx-2"
                                    type="checkbox"
                                    name="parking"
                                    checked={venueData.parking}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="form-check-label">Parking</label>
                            </div>
                            <div className="p-2">
                                <input
                                    className="form-check-input mx-2"
                                    type="checkbox"
                                    name="breakfast"
                                    checked={venueData.breakfast}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="form-check-label">Breakfast</label>
                            </div>
                            <div className="p-2">
                                <input
                                    className="form-check-input mx-2"
                                    type="checkbox"
                                    name="pets"
                                    checked={venueData.pets}
                                    onChange={handleCheckboxChange}
                                />
                                <label className="form-check-label">Pets</label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="rounded-pill px-2 pt-2 pb-2 mt-2 lease-form-btn">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Success Modal */}
            <SuccessModalCreate
                show={showModal}
                onClose={handleCloseModal}
                message={message}
            />
        </div>
    );
}