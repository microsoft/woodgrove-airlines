export const Sspr = ({ setSignInFlowState, setDisplayNameSate }) => {

    const goToSignInPassword = () => {
        setSignInFlowState(1);
    }

    return (

        <>
            <h3>Passwrod reset</h3>

            <div className="mb-3">
                <label htmlFor="attEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="attEmail" />
                <a href="#" className="wg-identity-link" onClick={goToSignInPassword}> Remember your password?</a>
            </div>
            {/* <span style="color: red; display: block; padding-bottom: 10px;"></span> */}
            <button type="submit" className="btn btn-primary">Next</button>

            {/* <form style="padding-left: 5px; padding-right: 5px;" *ngIf="step == 2">
        <div className="mb-3">
            <label htmlFor="attOTP" className="form-label">Enter code</label>
            <input type="email" className="form-control" id="attOTP" #attOTP value="">
        </div>
        <span style="color: red; display: block; padding-bottom: 10px;">{{errorMessage}}</span>
        <button type="submit" className="btn btn-primary" (click)="SSP3_3_VerifyOOB();">Validate and create</button>

        <div className="login-status" *ngIf="showSpinner">
            <mat-spinner [diameter]="25" style="display: inline-block;"></mat-spinner>
        </div>
    </form>


    <form style="padding-left: 5px; padding-right: 5px;" *ngIf="step == 3">
        <div className="mb-3">
            <label htmlFor="attPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="attPassword" #attPassword value="">
        </div>
        <div className="mb-3">
            <label htmlFor="attReEnterPassword" className="form-label">Re-enter password</label>
            <input type="password" className="form-control" id="attReEnterPassword" #attReEnterPassword value="">
        </div>

        <button type="submit" className="btn btn-primary" (click)="SSPR_4_Submit();">Continue</button>

        <div className="login-status" *ngIf="showSpinner">
            <mat-spinner [diameter]="25" style="display: inline-block;"></mat-spinner>
        </div>
    </form>

    <div *ngIf="step == 4">
        Your password successfully updated. Please sign-in.
    </div> */}
        </>
    );
};
