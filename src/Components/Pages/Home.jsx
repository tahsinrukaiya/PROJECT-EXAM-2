import HeroSection from "../HeroSection"
import VenueCards from "./Venues/VenueCards"
import SubscribeForm from "../SubscribeForm"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <HeroSection />
            <VenueCards limit={3} />
            <Link to="/venue_list">
                <div className="see-all-link text-center mt-4">
                    <h6 className="see-all-link">See All</h6>
                </div>
            </Link>
            <SubscribeForm />
        </>
    )
}