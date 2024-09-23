import React, { useState } from 'react'
import { authConfig } from "../../authConfig.js";

export const Sspr = ({ setSignInFlowState, setDisplayNameSate }) => {

    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [tos, setTos] = useState(true);

    const [formOneClass, setFormOneClass] = useState("");
    const [formTwoClass, setFormTwoClass] = useState("hide");
    const [formThreeClass, setFormThreeClass] = useState("hide");

    const [continuationToken, setContinuationToken] = useState(true);
    const [oob, setOob] = useState("");

    const [displayName, setSisplayName] = useState("");
    const [flowStarted, setFlowStarted] = useState(false);

    let interval, count;

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

    function SSPR_1_Start() {
        // Start the flow
        console.log("SSPR_1_Start started");
        setFlowStarted(true);
        setErrorMessage("");

        // Prepare the request data
        const formData = new FormData();
        formData.append('client_id', authConfig.appID);
        formData.append('challenge_type', 'oob redirect');
        formData.append('username', username);
        
        // Invoke Microsoft Entra exteranl ID stat endpoint 
        fetch(authConfig.baseUrl + '/resetpassword/v1.0/start', {
            method: 'POST',
            mode: 'cors',
            body: formData

        }).then((response) => response.json())
            .then((response) => {
                console.log(response)

                if (response.error) {
                    // Error handling
                    console.log("SSPR_1_Start return error:");
                    setFlowStarted(false)
                    setErrorMessage(getErrorMessage(response));
                }
                else {
                    // Proceed to the next step
                    // Call the challenge endpoint 
                    SSPR_2_Challenge(response.continuation_token);
                }
            })
            .catch((error) => {
                setFlowStarted(false);
                setErrorMessage(error);
            }
            );;
    }

    function SSPR_2_Challenge(continuation_token) {

        // Start the flow
        console.log("SSPR_2_Challenge started");

        // Prepare the request data
        const formData = new FormData();
        formData.append('client_id', authConfig.appID);
        formData.append('challenge_type', 'oob redirect');
        formData.append('continuation_token', continuation_token);

        // Invoke Microsoft Entra exteranl ID challenge endpoint 
        fetch(authConfig.baseUrl + '/resetpassword/v1.0/challenge', {
            method: 'POST',
            mode: 'cors',
            body: formData

        }).then((response) => response.json())
            .then((response) => {
                console.log(response)

                if (response.error) {
                    // Error handling
                    console.log("SSPR_2_Challenge return error:");
                    setFlowStarted(false)
                    setErrorMessage(getErrorMessage(response));
                }
                else {
                    // Proceed to the next step
                    // Show the email validation value 
                    setContinuationToken(response.continuation_token);
                    setFormOneClass("hide");
                    setFormTwoClass("");
                    setFormThreeClass("hide");
                    setFlowStarted(false);
                }
            })
            .catch((error) => {
                setFlowStarted(false);
                setErrorMessage(error);
            }
            );;
    }

    function SSPR_3_VerifyOOB() {

        // Start the flow
        console.log("SSPR_3_VerifyOOB started");
        setFlowStarted(true);
        setErrorMessage("");

        // Prepare the request data
        const formData = new FormData();
        formData.append('client_id', authConfig.appID);
        formData.append('grant_type', 'oob');
        formData.append('continuation_token', continuationToken);
        formData.append('oob', oob);

        // Invoke Microsoft Entra exteranl ID challenge endpoint 
        fetch(authConfig.baseUrl + '/resetpassword/v1.0/continue', {
            method: 'POST',
            mode: 'cors',
            body: formData

        }).then((response) => response.json())
            .then((response) => {
                console.log(response)

                if (response.error) {
                    // Error handling
                    console.log("SSPR_3_VerifyOOB return error:");
                    setFlowStarted(false)
                    setErrorMessage(getErrorMessage(response));
                }
                else {
                    // Proceed to the next step
                    // Call the token endpoint 
                    setContinuationToken(response.continuation_token);
                    setPassword("")
                    setFormOneClass("hide");
                    setFormTwoClass("hide");
                    setFormThreeClass("");
                    setFlowStarted(false);
                }
            })
            .catch((error) => {
                setFlowStarted(false);
                setErrorMessage(error);
            }
            );;
    }


    function SSPR_4_Submit() {

        // Start the flow
        console.log("SSPR_4_Submit started");

        // Prepare the request data
        const formData = new FormData();
        formData.append('client_id', authConfig.appID);
        formData.append('new_password', password);
        formData.append('continuation_token', continuationToken);

        // Invoke Microsoft Entra exteranl ID challenge endpoint 
        fetch(authConfig.baseUrl + '/resetpassword/v1.0/submit', {
            method: 'POST',
            mode: 'cors',
            body: formData

        }).then((response) => response.json())
            .then((response) => {
                console.log(response)

                if (response.error) {
                    // Error handling
                    console.log("SSPR_4_Submit return error:");
                    setFlowStarted(false)
                    setErrorMessage(getErrorMessage(response));
                }
                else {
                    // Proceed to the next step
                    console.log(response.continuation_token)
                    setContinuationToken(response.continuation_token);

                    count = 0;
                    interval = setInterval(SSPR_5_pollCompletion, 3000);
                }
            })
            .catch((error) => {
                setFlowStarted(false);
                setErrorMessage(error);
            }
            );;
    }

    function SSPR_5_pollCompletion() {

        // Start the flow
        console.log("SSPR_5_pollCompletion started");

        count+=1;
        if (count >= 5)
        {
            clearInterval(interval);
        }

        // Prepare the request data
        const formData = new FormData();
        formData.append('client_id', authConfig.appID);
        formData.append('continuation_token', continuationToken);

        // Invoke Microsoft Entra exteranl ID challenge endpoint 
        fetch(authConfig.baseUrl + '/resetpassword/v1.0/poll_completion', {
            method: 'POST',
            mode: 'cors',
            body: formData

        }).then((response) => response.json())
            .then((response) => {
                console.log(response)

                if (response.error) {
                    // Error handling
                    console.log("SSPR_5_pollCompletion return error:");
                    setFlowStarted(false)
                    setErrorMessage(getErrorMessage(response));
                }
                else {
                    setFlowStarted(false);
                    console.log("COMPLETED!!!")
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
            <h3>Passwrod reset</h3>

            <div className={formOneClass}>
                <div className="mb-3">
                    <label htmlFor="attEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="attEmail"  value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <a href="#" className="wg-identity-link" onClick={goToSignInPassword}> Remember your password?</a>
                </div>
                <div className="mb-3">
                    {errorMessage !== "" && <div className="wg-identity-error">
                        {errorMessage}
                    </div >
                    }
                </div>
                <div className="mb-3">
                    <br />
                    <button type="button" className="btn btn-small btn-primary" onClick={SSPR_1_Start} disabled={flowStarted}>
                        {flowStarted === true && <div className="spinner-border text-warning spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>}
                        &nbsp;
                        Next</button>
                </div>
            </div>

            <div className={formTwoClass}>
                <div className="mb-3">
                    <label htmlFor="attOTP" className="form-label">Enter code</label>
                    <input type="email" className="form-control" id="attOTP" value={oob}
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
                    <button type="button" className="btn btn-small btn-primary" onClick={SSPR_3_VerifyOOB} disabled={flowStarted}>
                        {flowStarted === true && <div className="spinner-border text-warning spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>}
                        &nbsp;
                        Next</button>
                </div>
            </div>



            <div className={formThreeClass}>
                <div className="mb-3">
                    <label htmlFor="attPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="attPassword" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="attReEnterPassword" className="form-label">Re-enter password</label>
                    <input type="password" className="form-control" id="attReEnterPassword" />
                </div>
                <div className="mb-3">
                    {errorMessage !== "" && <div className="wg-identity-error">
                        {errorMessage}
                    </div >
                    }
                </div>
                <div className="mb-3">
                    <br />
                    <button type="button" className="btn btn-small btn-primary" onClick={SSPR_4_Submit} disabled={flowStarted}>
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
