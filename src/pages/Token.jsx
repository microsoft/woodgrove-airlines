import React, { useState, useEffect } from 'react'

const Token = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [claimsString, setClaimsString] = useState(null);

    var claims

    useEffect(() => {

        const at = localStorage.getItem('accessToken');

        setAccessToken(at);

        if (at === null || at === "null" || at === '') {
            setErrorMessage("Can't find your access token. Please sign-in")
        }
        else {
            setErrorMessage("");
            claims = JSON.parse(window.atob(at.split('.')[1]))

            var str = "";
            {
                Object.keys(claims).map((key, i) => {
                    let value = claims[key];
                    return (
                        str += "<tr key=" + i + "><td>" + key + "</td><td>" + value + "</td></tr>"
                    );
                })
            }

            setClaimsString(str)
        }

    }, claims, accessToken, errorMessage);

    return <>
        <div className="container">

            <h1 className='wg-h1'>Your claims and access token</h1>

            {errorMessage !== "" && <div className="alert alert-danger" role="alert">
                {errorMessage}
            </div>}

            {errorMessage === "" &&
                <>

                    <table className='table table-striped' aria-labelledby="tableLabel">
                        <thead>
                            <tr>
                                <th>Claim</th>
                                <th>Value</th>
                            </tr>
                        </thead>

                        <tbody dangerouslySetInnerHTML={{ __html: claimsString }} />

                    </table>

                    <div className="collapse show" id="collapseExample">

                        <span>The <a
                            href={"https://jwt.ms/#access_token=" + accessToken}
                            target="_blank">https://jwt.ms</a> shows the access token used to call a web API.</span>
                    </div>
                </>}

        </div>
    </>;
};

export default Token;