import React, { useState } from 'react'
import { authConfig } from "../../authConfig.js";

export const SignUpPassword = ({ setSignInFlowState, setDisplayNameSate }) => {

    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [tos, setTos] = useState(true);

    const [formOneClass, setFormOneClass] = useState("");
    const [formTwoClass, setFormTwoClass] = useState("hide");

    const [continuationToken, setContinuationToken] = useState(true);
    const [oob, setOob] = useState("");

    const [displayName, setSisplayName] = useState("");
    const [flowStarted, setFlowStarted] = useState(false);

    const goToSignInPassword = () => {
        setSignInFlowState(1);
    }

    function getErrorMessage(error) {
        if (error.error_description) {
            let i = error.error_description.indexOf("Trace");

            if (i > 0) {
                return error.error_description.substring(0, i - 1)
            }
        }
    }

    function SignUp_1_Start() {
        // Start the flow
        console.log("SignUp_1_Start started");
        setFlowStarted(true);
        setErrorMessage("");

        // Prepare the request data
        const formData = new FormData();
        formData.append('client_id', authConfig.appID);
        formData.append('challenge_type', 'redirect oob password');
        formData.append('username', username);
        formData.append('password', password);
        formData.append('attributes',
            '{"displayName": "' + displayName + '", "extension_0cae61cc83e94edd978ec2fde3c5f2f3_PolicyAgreement" : true}');


        // Invoke Microsoft Entra exteranl ID stat endpoint 
        fetch(authConfig.baseUrl + '/signup/v1.0/start', {
            method: 'POST',
            mode: 'cors',
            body: formData

        }).then((response) => response.json())
            .then((response) => {
                console.log(response)

                if (response.error) {
                    // Error handling
                    console.log("SignUp_1_Start return error:");
                    setFlowStarted(false)
                    setErrorMessage(getErrorMessage(response));
                }
                else {
                    // Proceed to the next step
                    // Call the challenge endpoint 
                    SignUp_2_Challenge(response.continuation_token);
                }
            })
            .catch((error) => {
                setFlowStarted(false);
                setErrorMessage(error);
            }
            );;
    }

    function SignUp_2_Challenge(continuation_token) {

        // Start the flow
        console.log("SignUp_2_Challenge started");

        // Prepare the request data
        const formData = new FormData();
        formData.append('client_id', authConfig.appID);
        formData.append('continuation_token', continuation_token);

        // Invoke Microsoft Entra exteranl ID challenge endpoint 
        fetch(authConfig.baseUrl + '/signup/v1.0/challenge', {
            method: 'POST',
            mode: 'cors',
            body: formData

        }).then((response) => response.json())
            .then((response) => {
                console.log(response)

                if (response.error) {
                    // Error handling
                    console.log("SignUp_2_Challenge return error:");
                    setFlowStarted(false)
                    setErrorMessage(getErrorMessage(response));
                }
                else {
                    // Proceed to the next step
                    // Show the email validation value 
                    setContinuationToken(response.continuation_token);
                    setFormOneClass("hide");
                    setFormTwoClass("");
                    setFlowStarted(false);
                }
            })
            .catch((error) => {
                setFlowStarted(false);
                setErrorMessage(error);
            }
            );;
    }

    function SignUp_3_VerifyOOB(continuation_token) {

        // Start the flow
        console.log("SignUp_3_VerifyOOB started");
        setFlowStarted(true);
        setErrorMessage("");

        // Prepare the request data
        const formData = new FormData();
        formData.append('client_id', authConfig.appID);
        formData.append('grant_type', 'oob');
        formData.append('continuation_token', continuationToken);
        formData.append('oob', oob);

        // Invoke Microsoft Entra exteranl ID challenge endpoint 
        fetch(authConfig.baseUrl + '/signup/v1.0/continue', {
            method: 'POST',
            mode: 'cors',
            body: formData

        }).then((response) => response.json())
            .then((response) => {
                console.log(response)

                if (response.error) {
                    // Error handling
                    console.log("SignUp_3_VerifyOOB return error:");
                    setFlowStarted(false)
                    setErrorMessage(getErrorMessage(response));
                }
                else {
                    // Proceed to the next step
                    // Call the token endpoint 
                    setSignInFlowState(1);
                    setFlowStarted(false);
                }
            })
            .catch((error) => {
                setFlowStarted(false);
                setErrorMessage(error);
            }
            );;
    }

    return (

        <>
            <h3>Sign up</h3>
            <div className={formOneClass}>
                <div className="mb-1">
                    <label htmlFor="attEmail" className="form-label wg-form-label">Email address</label>
                    <input type="email" className="form-control form-control-sm" required id="attEmail"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <a href="#" className="wg-identity-link" onClick={goToSignInPassword}> Already have an account?</a>
                </div>
                <div className="mb-1">
                    <label htmlFor="attPassword" className="form-label wg-form-label">Password</label>
                    <input type="password" className="form-control form-control-sm" id="attPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-1">
                    <label htmlFor="attReEnterPassword" className="form-label wg-form-label">Re-enter password</label>
                    <input type="password" className="form-control form-control-sm" id="attPassword" />
                </div>
                <div className="mb-1">
                    <label htmlFor="attDisplayName" className="form-label wg-form-label">Display name</label>
                    <input type="text" className="form-control form-control-sm" id="attDisplayName"
                        value={displayName}
                        onChange={(e) => setSisplayName(e.target.value)} />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked />
                    <label className="form-check-label wg-identity-checkbox" for="flexCheckChecked">
                        I agree to the <a href="https://woodgrovedemo.com/tos" target="_blank">terms of use</a> and the <a href="https://woodgrovedemo.com/Privacy" target="_blank">privacy policy</a>
                    </label>
                </div>
                <div className="mb-3">
                    {errorMessage !== "" && <div className="wg-identity-error">
                        {errorMessage}
                    </div >
                    }
                </div>
                <div className="mb-3">
                    <br />
                    <button type="button" className="btn btn-small btn-primary" onClick={SignUp_1_Start} disabled={flowStarted}>
                        {flowStarted === true && <div className="spinner-border text-warning spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>}
                        &nbsp;
                        Next</button>
                </div>
            </div >

            <div className={formTwoClass}>
                <div className="mb-1">
                    <label htmlFor="attOTP" className="form-label wg-form-label">Enter code</label>
                    <input type="email" className="form-control form-control-sm" id="attOTP"
                        value={oob}
                        onChange={(e) => setOob(e.target.value)} />
                </div>
                <div className="mb-3">
                    {errorMessage !== "" && <div className="wg-identity-error">
                        {errorMessage}
                    </div >
                    }
                </div>
                <div className="mb-3">
                    <br />
                    <button type="button" className="btn btn-small btn-primary" onClick={SignUp_3_VerifyOOB} disabled={flowStarted}>
                        {flowStarted === true && <div className="spinner-border text-warning spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>}
                        &nbsp;
                        Next</button>
                </div>
            </div>

        </>
    );
};
