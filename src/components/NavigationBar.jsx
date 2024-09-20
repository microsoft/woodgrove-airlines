import { Link } from "react-router-dom";

export const NavigationBar = () => {

    return (
        <>
            <div className="wg-header-container">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link to={`/`} className="navbar-brand wg-white"><img className="wg-header-logo" src={require('../images/logo.svg').default} alt="Woodgrove logo 2" /> Woodgrove Airline</Link>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarContent">
                                <div className="navbar-nav me-auto mb-2"> </div>
                                <ul className="navbar-nav">

                                    {/* UI elements for unauthenticated users */}
                                    {/* <UnauthenticatedTemplate> */}
                                    <li className="nav-item dropdown">
                                        <Link to={`profile`} className="nav-link wg-white">Sign in</Link>
                                    </li>
                                    {/* </UnauthenticatedTemplate> */}

                                    {/* UI elements for authenticated users */}
                                    {/* <AuthenticatedTemplate> */}
                                    <li className="nav-item">
                                        {/* <Link to={`token`} className="nav-link">Hello {activeAccount ? activeAccount.name : 'Unknown'}</Link> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`profile`} className="nav-link wg-white">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`profile`} className="nav-link wg-white">Sign out</Link>
                                    </li>
                                    {/* </AuthenticatedTemplate> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
