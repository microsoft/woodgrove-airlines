import { Link } from "react-router-dom";
import { SignInContainer } from "./identity/SignInContainer.jsx";
import React, { useState } from 'react'

export function NavigationBar() {

    const [loginPopupClass, setHideLightbox] = useState('hide-loginPopup');

    function toggleLoginPopup() {

        if (loginPopupClass === 'hide-loginPopup')
            setHideLightbox('loginPopup')
        else
            setHideLightbox('hide-loginPopup')
    }


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
                                        <Link className="nav-link wg-white" onClick={toggleLoginPopup}>Sign in</Link>

                                        <div className="loginPopupWrap">
                                            <div id="loginPopupContainer" className={loginPopupClass}>
                                                <SignInContainer></SignInContainer>
                                            </div>
                                        </div>
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
