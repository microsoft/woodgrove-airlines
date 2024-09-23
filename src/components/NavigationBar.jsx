import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { SignInPassword } from "./identity/SignInPassword.jsx";
import { SignUpPassword } from "./identity/SignUpPassword.jsx";
import { Sspr } from "./identity/Sspr.jsx";

export function NavigationBar() {

    const [loginPopupClass, setHideLightbox] = useState('hide-loginPopup');
    const [signInFlow, setSignInFlowState] = useState(1);
    const [displayName, setDisplayNameSate] = useState("");

    function toggleLoginPopup() {

        if (loginPopupClass === 'hide-loginPopup') {
            // Show the signIn UI element
            setSignInFlowState(1)
            setHideLightbox('loginPopup');
        }
        else
            // Hide the signIn UI element
            setHideLightbox('hide-loginPopup')
    }

    function hideLoginPopup() {
        // Hide the signIn UI element
        setHideLightbox('hide-loginPopup')
    }

    function signOut() {
        setDisplayNameSate("");
        localStorage.clear();
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
                                    {displayName === "" &&
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link wg-white wg-identity-signIn-button" onClick={toggleLoginPopup}>Sign in</Link>
                                            <div className="loginPopupWrap">
                                                <div id="loginPopupContainer" className={loginPopupClass}>


                                                    {/* Close button */}
                                                    <div className="position-relative">
                                                        <div className="position-absolute top-0 end-0">
                                                            <button type="button" className="btn-close wg-identity-close end-0" onClick={hideLoginPopup}></button>
                                                        </div>
                                                    </div>

                                                    {/* flow: 1) SignInPassword 2) SignUpPassword 3) Sspr 4) SignInOtp 5) SignUpOtp */}
                                                    {signInFlow === 1 && <SignInPassword
                                                        setSignInFlowState={setSignInFlowState}
                                                        setDisplayNameSate={setDisplayNameSate}
                                                    ></SignInPassword>}

                                                    {signInFlow === 2 && <SignUpPassword
                                                        setSignInFlowState={setSignInFlowState}
                                                        setDisplayNameSate={setDisplayNameSate}
                                                    ></SignUpPassword>}

                                                    {signInFlow === 3 && <Sspr
                                                        setSignInFlowState={setSignInFlowState}
                                                        setDisplayNameSate={setDisplayNameSate}
                                                    ></Sspr>}


                                                </div>
                                            </div>
                                        </li>}

                                    {displayName !== "" &&
                                        <>
                                            <li className="nav-item">
                                                <Link to={`token`} className="nav-link wg-white">{displayName}</Link>
                                            </li>
                                            {/* <li className="nav-item">
                                                <Link to={`profile`} className="nav-link wg-white">Profile</Link>
                                            </li> */}
                                            <li className="nav-item">
                                                <Link className="nav-link wg-white" onClick={signOut}>Sign out</Link>
                                            </li>
                                        </>}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
