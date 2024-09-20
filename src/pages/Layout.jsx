import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components/NavigationBar.jsx";

const Layout = (props) => {
    return <>
        <header className="header">
            <NavigationBar />
        </header><div id="mainContent"><Outlet /></div>

        {/* Footer */}
        <footer className="border-top footer text-muted" >
            <div className="container-fluid footer-text">
                &copy; Woodgrove <spa className="wg-footer-app-version">(version: 1.0.0.1)</spa><i className="bi bi-info-circle wg-footer-link"></i> <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Help</a>
                <i className="bi bi-lock wg-footer-link"></i><a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" href="https://woodgrovedemo.com/Privacy">Privacy</a>
                <i className="bi bi-file-earmark-text wg-footer-link"></i><a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" href="https://woodgrovedemo.com/tos">Terms of
                    service</a>
                <i className="bi bi-github wg-footer-link"></i><a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" href="https://github.com/microsoft/woodgrove-airline" >Source code</a>
            </div>
        </footer>
    </>;
};

export default Layout;