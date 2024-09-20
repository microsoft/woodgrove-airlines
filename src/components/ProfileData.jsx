export const ProfileData = (prop) => {

    console.log(prop.data)
    return <>

        <div className="text-left">
            <div className="input-group mb-3">
                <label htmlFor="inputDisplayName" className="col-sm-2 col-form-label">Display name</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="inputDisplayName" readOnly required value={prop.data.displayName} />
                </div>
            </div>
            <div className="input-group mb-3">
                <label htmlFor="inputGivenName" className="col-sm-2 col-form-label">Given name</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="inputGivenName" readOnly value={prop.data.givenName || ''} />
                </div>
            </div>
            <div className="input-group mb-3">
                <label htmlFor="inputSurname" className="col-sm-2 col-form-label">Surname</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="inputSurname" readOnly value={prop.data.surname || ''} />
                </div>
            </div>
            <div className="input-group mb-3">
                <label htmlFor="inputCountry" className="col-sm-2 col-form-label">Country</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="inputCountry" />
                </div>
            </div>
            <div className="input-group mb-3">
                <label htmlFor="inputCity" className="col-sm-2 col-form-label">City</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="inputCity" />
                </div>
            </div>
            <div className="input-group mb-3">
                <label htmlFor="inputSpecialDiet" className="col-sm-2 col-form-label">Special diet</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="inputSpecialDiet" />
                </div>
            </div>
            <div className="input-group mb-3">
                <div className="col-sm-6">
                    <button type="button" className="btn btn-light"><i
                        className="bi bi-save2"></i> Save</button>
                </div>
            </div>

            <br />&nbsp;<br />
            <h2>Your account</h2>
            <div>
                The globally unique identifier of your account: {prop.data.id}
            </div>
        </div>

    </>;
};

