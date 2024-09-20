import  { HomeJumbotron } from "../components/home/HomeJumbotron.jsx";

const Home = () => {
    return <>
        <HomeJumbotron></HomeJumbotron>

        <div className="container wg-home-container">
            <h2 className="wg-home-find-offers">Find our offers</h2>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card wg-card">
                        <div className="card-body wg-card-body">
                            <div className="wg-card-image wg-card-image-india"></div>

                            <div className="wg-card-content">
                                <h5 className="card-title wg-card-title">India</h5>
                                <p className="card-text">Book your next flight from Munich, Germany, to India with our
                                    special offers and earn travel rewards. New Delhi is one of the world's top tourist destination cities. A
                                    city that never sleeps.
                                    Experience the luxury shopping centres and malls compete with the street bazaars and markets.</p>
                                <a href="#" className="btn btn-primary">Book now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card wg-card">
                        <div className="card-body wg-card-body">
                            <div className="wg-card-image wg-card-image-uae"></div>
                            <div className="wg-card-content">
                                <h5 className="card-title wg-card-title">United Arab Emirates</h5>
                                <p className="card-text">Discover the best things in Dubai, from attractions to restaurants and experiences.
                                    Beautiful sandy beaches, most popular attractions and experiences like no other. Dubai is the fourth most
                                    visited city on Earth and a leading tourist destination by any contemporary standard.
                                </p>
                                <a href="#" className="btn btn-primary">Book now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card wg-card">
                        <div className="card-body wg-card-body">
                            <div className="wg-card-image wg-card-image-uk"></div>
                            <div className="wg-card-content">
                                <h5 className="card-title wg-card-title">United kingdom</h5>
                                <p className="card-text">Discover a country filled with fairy-tales castles, iconic landmarks, world-class
                                    museums, royal parks and vibrant modern
                                    cities. bursting with unforgettable experiences to share.
                                    <br />
                                    Book now and get free and easy 48 hours cancellation.
                                </p>
                                <a href="#" className="btn btn-primary">Book now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Home;