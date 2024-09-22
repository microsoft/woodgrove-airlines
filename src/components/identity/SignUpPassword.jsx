export const SignUpPassword = ({ onSignInFlowClick }) => {

    const goToSignInPassword = () => {
        onSignInFlowClick(1);
    }

    return (

        <>
            <h3>Sign up</h3>
            <div>
                <div className="mb-1">
                    <label htmlFor="attEmail" className="form-label wg-form-label">Email address</label>
                    <input type="email" className="form-control form-control-sm" required id="attEmail" />
                    <a href="#" className="wg-identity-link" onClick={goToSignInPassword}> Already have an account?</a>
                </div>
                <div className="mb-1">
                    <label htmlFor="attPassword" className="form-label wg-form-label">Password</label>
                    <input type="password" className="form-control form-control-sm" id="attPassword" />
                </div>
                <div className="mb-1">
                    <label htmlFor="attReEnterPassword" className="form-label wg-form-label">Re-enter password</label>
                    <input type="password" className="form-control form-control-sm" id="attPassword" />
                </div>
                <div className="mb-1">
                    <label htmlFor="attDisplayName" className="form-label wg-form-label">Display name</label>
                    <input type="text" className="form-control form-control-sm" id="attDisplayName" />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked />
                    <label className="form-check-label wg-identity-checkbox" for="flexCheckChecked">
                        I agree to the <a href="https://woodgrovedemo.com/tos" target="_blank">terms of use</a> and the <a href="https://woodgrovedemo.com/Privacy" target="_blank">privacy policy</a>
                    </label>
                </div>
                {/* <div className="mb-1">
                    <div className="alert alert-danger"></div>
                </div> */}
                <div className="mb-3">
                    <br />
                    <button type="button" className="btn btn-small btn-primary">Next</button>
                </div>

            </div >



            {/* <div className="mb-1">
        <label htmlFor="attOTP" className="form-label wg-form-label">Enter code</label>
        <input type="email" className="form-control form-control-sm" id="attOTP" #attOTP value="">
    </div>
    <span style="color: red; display: block; padding-bottom: 10px;">{{errorMessage}}</span>
    <button type="submit" className="btn btn-primary" (click) = "SignUp_3_VerifyOOB();" > Validate and create</button >

    <div className="login-status" * ngIf="showSpinner" >
        <mat-spinner [diameter] = "25" style = "display: inline-block;" ></mat - spinner >
    </div > */}


        </>
    );
};
