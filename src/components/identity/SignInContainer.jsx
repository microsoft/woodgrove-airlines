import { SignInPassword } from "./SignInPassword.jsx";
import { SignUpPassword } from "./SignUpPassword.jsx";
import { Sspr } from "./Sspr.jsx";
import React, { useState } from 'react'

export const SignInContainer = ({ onSignInFlowClick, signInFlow, hideLoginPopupFunc }) => {

    return (
        <>
            {/* Close button */}
            <div class="position-relative">
                <div class="position-absolute top-0 end-0">
                    <button type="button" class="btn-close wg-identity-close end-0" onClick={hideLoginPopupFunc}></button>
                </div>
            </div>

            {/* flow: 1) SignInPassword 2) SignUpPassword 3) Sspr 4) SignInOtp 5) SignUpOtp */}
            {signInFlow === 1 && <SignInPassword onSignInFlowClick={onSignInFlowClick} ></SignInPassword>}
            {signInFlow === 2 && <SignUpPassword onSignInFlowClick={onSignInFlowClick} ></SignUpPassword>}
            {signInFlow === 3 && <Sspr onSignInFlowClick={onSignInFlowClick} ></Sspr>}
        </>
    );
}