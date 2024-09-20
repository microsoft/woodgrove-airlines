export const HomeJumbotron = (prop) => {
    return <>
        <div className="wg-jumbotron"></div>

            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <h1 className="display-6 wg-home-header">Thank you for flying with us</h1>

                    <div className="lead wg-home-options-container">
                        <div className="row">
                            {/*  Section section */}
                            <ul className="nav nav-underline" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active link-dark" id="flights-tab" data-bs-toggle="tab" data-bs-target="#flights-tab-pane" type="button" role="tab" aria-controls="flights-tab-pane" aria-selected="true">
                                        <i className="bi bi-airplane" /> Flights</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link link-dark" id="hotels-tab" data-bs-toggle="tab" data-bs-target="#hotels-tab-pane" type="button" role="tab" aria-controls="hotels-tab-pane" aria-selected="false"><i className="bi bi-buildings"></i> Hotels</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link link-dark" id="cars-tab" data-bs-toggle="tab" data-bs-target="#cars-tab-pane" type="button" role="tab" aria-controls="cars-tab-pane" aria-selected="false"><i className="bi bi-car-front"></i> Cars</button>
                                </li>
                            </ul>

                            <div className="tab-content" id="wg-home-options">
                                {/* Flights section */}
                                <div className="tab-pane fade show active" id="flights-tab-pane" role="tabpanel" aria-labelledby="flights-tab">
                                    <div className="row">
                                        <div className="col form-floating">
                                            <input type="text" className="form-control" id="InputDeparture" defaultValue="Athens (ATH)" />
                                            <label className="wg-ml-5">Departure</label>
                                        </div>
                                        <div className="col form-floating">
                                            <input type="text" className="form-control" id="InputDestination" defaultValue="Tokyo (TYO)" />
                                            <label className="wg-ml-5">Destination</label>
                                        </div>
                                        <div className="col form-floating">
                                            <input type="text" className="form-control" id="InputDepartureDate" defaultValue="08/08/2024" />
                                            <label className="wg-ml-5">Departure date</label>
                                        </div>
                                        <div className="col form-floating">
                                            <input type="text" className="form-control" id="InputReturnDate" defaultValue="15/08/2024" />
                                            <label className="wg-ml-5" >Return date</label>
                                        </div>
                                        <div className="col">
                                            <button type="submit" className="btn btn-primary" id="SeachFlights"><i className="bi bi-search"></i> Find</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="hotels-tab-pane" role="tabpanel" aria-labelledby="hotels-tab">

                                    Hotels
                                </div>
                                <div className="tab-pane fade" id="cars-tab-pane" role="tabpanel" aria-labelledby="cars-tab">Cars</div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        
    </>;
};
