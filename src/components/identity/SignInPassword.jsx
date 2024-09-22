import React, { useState, useEffect } from 'react'
import { authConfig } from "../../authConfig.js";

export const SignInPassword = ({ setSignInFlowState, setDisplayNameSate }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [flowStarted, setFlowStarted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const goToSignUpPassword = () => {
        setSignInFlowState(2);
    }

    const goToSspr = () => {
        setSignInFlowState(3);
    }

    function getErrorMessage(error) {
        if (error.error_description) {
            let i = error.error_description.indexOf("Trace");

            if (i > 0) {
                return error.error_description.substring(0, i - 1)
            }
        }
    }

    function PasswordLogin_1_Initiate() {
        // Start the flow
        console.log("PasswordLogin_1_Initiate started");
        setFlowStarted(true);
        setErrorMessage("");

        // Prepare the request data
        const formData = new FormData();
        formData.append('client_id', authConfig.appID);
        formData.append('challenge_type', 'password redirect');
        formData.append('username', username);

        // useEffect(() => {
        // Invoke Microsoft Entra exteranl ID initiate endpoint 
        fetch(authConfig.baseUrl + '/oauth2/v2.0/initiate', {
            method: 'POST',
            mode: 'cors',
            body: formData

        }).then((response) => response.json())
            .then((response) => {
                console.log(response)

                if (response.error) {
                    // Error handling
                    console.log("PasswordLogin_1_Initiate return error:");
                    setFlowStarted(false)

                    // Known error 
                    if (response.error === "user_not_found") {
                        setErrorMessage("We couldn't find an account with this email address.");
                    }
                    else {
                        // Unknown error
                        setErrorMessage(getErrorMessage(response));
                    }
                }
                else {
                    // Proceed to the next step
                    // Call the challenge endpoint 
                    PasswordLogin_2_Challenge(response.continuation_token);
                }
            })
            .catch((error) => {
                setFlowStarted(false);
                setErrorMessage(error);
            }
            );;
        // });
    }

    function PasswordLogin_2_Challenge(continuation_token) {

        // Start the flow
        console.log("PasswordLogin_2_Challenge started");

        // Prepare the request data
        const formData = new FormData();
        formData.append('client_id', authConfig.appID);
        formData.append('challenge_type', 'password redirect');
        formData.append('continuation_token', continuation_token);

        // useEffect(() => {
        // Invoke Microsoft Entra exteranl ID challenge endpoint 
        fetch(authConfig.baseUrl + '/oauth2/v2.0/challenge', {
            method: 'POST',
            mode: 'cors',
            body: formData

        }).then((response) => response.json())
            .then((response) => {
                console.log(response)

                if (response.error) {
                    // Error handling
                    console.log("PasswordLogin_2_Challenge return error:");
                    setFlowStarted(false)
                    setErrorMessage(getErrorMessage(response));
                }
                else {
                    // Proceed to the next step
                    // Call the token endpoint 
                    PasswordLogin_3_Token(response.continuation_token);
                }
            })
            .catch((error) => {
                setFlowStarted(false);
                setErrorMessage(error);
            }
            );;
        // });
    }

    function PasswordLogin_3_Token(continuation_token) {

        // Start the flow
        console.log("PasswordLogin_3_Token started");

        // Prepare the request data
        const formData = new FormData();
        formData.append('client_id', authConfig.appID);
        formData.append('grant_type', 'password');
        formData.append('password', password);
        formData.append('continuation_token', continuation_token);
        formData.append('scope', authConfig.scopes);

        // useEffect(() => {
        // Invoke Microsoft Entra exteranl ID token endpoint 
        fetch(authConfig.baseUrl + '/oauth2/v2.0/token', {
            method: 'POST',
            mode: 'cors',
            body: formData

        }).then((response) => response.json())
            .then((response) => {
                console.log(response)

                if (response.error) {
                    // Error handling
                    console.log("PasswordLogin_3_Token return error:");
                    setFlowStarted(false)

                    // Known error 
                    if (response.error === "user_not_found") {
                        setErrorMessage("We couldn't find an account with this email address.");
                    }
                    else {
                        // Unknown error
                        setErrorMessage(getErrorMessage(response));
                    }
                }
                else {
                    setFlowStarted(false)

                    // Get and store the access token
                    localStorage.setItem("accessToken", response.access_token);

                    // Get the claims from the token
                    let claims = JSON.parse(window.atob(response.access_token.split('.')[1]))

                    console.log(claims.name)
                    setDisplayNameSate(claims.name);
                }
            })
            .catch((error) => {
                setFlowStarted(false);
                setErrorMessage(error);
            }
            );;
        // });
    }


    return (
        <>
            <h3>Sign in</h3>
            <div className="mb-3">
                <label htmlFor="signInEmail" className="form-label wg-form-label">Email address</label>
                <input type="email" className="form-control form-control-sm" id="signInEmail"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <a href="#" className="wg-identity-link" onClick={goToSignUpPassword}> Don't have an account?</a>
            </div>

            <div className="mb-3">
                <label htmlFor="signInPassword" className="form-label wg-form-label">Password</label>
                <input type="password" className="form-control form-control-sm" id="signInPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <a href="#" className="wg-identity-link" onClick={goToSspr}> Forgot password?</a>
            </div>

            <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={PasswordLogin_1_Initiate} disabled={flowStarted}>
                    {flowStarted === true && <div className="spinner-border text-warning spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>}
                    &nbsp; Sign in</button>
            </div>

            <div className="mb-3">
                {errorMessage !== "" && <div className="wg-identity-error">
                    {errorMessage}
                </div >
                }
            </div>


        </>
    );
}