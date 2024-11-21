import VenuesPage from "./Venues/VenuesPage";
import SubscribeForm from "../SubscribeForm";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <VenuesPage />
      <Link to="/venue_list">
        <div className="see-all-link text-center mt-4">
          <h6 className="see-all-link">See All</h6>
        </div>
      </Link>
      <SubscribeForm />
    </>
  );
}
