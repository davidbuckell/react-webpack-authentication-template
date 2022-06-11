import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

function handleRedirectLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

function handlePopupLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <React.Fragment>
            <Button variant="secondary" className="ml-auto" onClick={() => handleRedirectLogin(instance)}>Sign in using Redirect</Button>
            <Button variant="secondary" className="ml-auto" onClick={() => handlePopupLogin(instance)}>Sign in using Popup</Button>
        </React.Fragment>        
    );
}