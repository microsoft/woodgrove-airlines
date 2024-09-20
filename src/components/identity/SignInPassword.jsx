export const SignInPassword = ({ onClick, count }) => {

    const goToSignUpPassword = () => {
        onClick(2);
    }

    const goToSspr = () => {
        onClick(3);
    }


    return (
        <>
            <h3>Sign in</h3>
            <div className="mb-3">
                <label htmlFor="signInEmail" className="form-label wg-form-label">Email address</label>
                <input type="email" className="form-control form-control-sm" id="signInEmail" defaultValue="" />
                <a href="#" className="wg-identity-link" onClick={goToSignUpPassword}> Don't have an account?</a>
            </div>
            <div className="mb-3">
                <label htmlFor="signInPassword" className="form-label wg-form-label">Password</label>
                <input type="password" className="form-control form-control-sm" id="signInPassword" defaultValue="" />
                <a href="#" className="wg-identity-link" onClick={goToSspr}> Forgot password?</a>
            </div>

            {/* <a href="#"> Click here to create a new account.</a>
                <a> Click here to sign-in with email and passcode.</a > */}
            <button type="button" className="btn btn-primary" > Sign in</button >

            <div className="login-status" >

            </div >
        </>
    );
}