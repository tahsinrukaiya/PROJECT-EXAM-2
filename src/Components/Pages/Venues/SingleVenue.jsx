import Venue from "/src/assets/venue.jpg"

export default function SingleVenue() {
    return (
        <>
            <div className="card_container d-flex flex-column bd-highlight mb-3 mt-5">
                <div className="card col-10 col-md-6 col-lg-10 mx-auto">
                    <div className="venue-title text-center mt-5"><h1>Venue Title</h1></div>
                    <div className="venue-address text-center"><h6>Venue Address</h6>
                        <h3 className="venue-detail px-5 mt-5">Michaels is a vibrant district restaurant that aims to
                            create a magical atmosphere where food, drink, music and people unite.</h3>
                        <button className="book-btn rounded-pill px-3 pt-2 pb-2 mt-3"> Book now</button></div>
                    <img src={Venue} className="card-img-top px-5 pb-4 pt-5" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="venue-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer laoreet interdum dolor, sed elementum tortor
                            placerat vel. Duis ac mauris pharetra, sodales turpis
                            in, sodales arcu. Pellentesque ultricies urna quis
                            consectetur lobortis. Fusce ex lacus, auctor eu dapibus
                            sed, vestibulum ut felis. Aliquam erat volutpat.
                            Suspendisse ultricies, diam vitae bibendum pulvinar
                            , massa tellus tempor orci, varius volutpat ante ipsum
                            quis mi. Quisque blandit volutpat gravida. Pellentesque
                            suscipit quam sit amet euismod laoreet. Fusce vel massa
                            ac arcu semper pharetra. Duis vulputate ante ac faucibus
                            vestibulum. Vivamus et ipsum mollis, congue eros quis,
                            pulvinar mi. Donec dapibus auctor ipsum ut rutrum.
                            Fusce euismod felis id erat tincidunt convallis.
                            Phasellus nec lectus lorem. Proin sed velit a
                            dui malesuada egestas.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}