import { SignInPassword } from "./SignInPassword.jsx";
import { SignUpPassword } from "./SignUpPassword.jsx";
import { Sspr } from "./Sspr.jsx";
import React, { useState } from 'react'

export const SignInContainer = () => {

    const [signInFlow, setSignInFlowState] = useState(1);
    
    const setSignInFlow = (flow) => {
        setSignInFlowState(flow)
    }

    return (
        <>
            {/* flow: 1) SignInPassword 2) SignUpPassword 3) Sspr 4) SignInOtp 5) SignUpOtp */}
            {signInFlow === 1 && <SignInPassword  onClick={setSignInFlow} count={signInFlow}></SignInPassword>}
            {signInFlow === 2 && <SignUpPassword  onClick={setSignInFlow} count={signInFlow}></SignUpPassword>}
            {signInFlow === 3 && <Sspr  onClick={setSignInFlow} count={signInFlow}></Sspr>}
        </>
    );
}