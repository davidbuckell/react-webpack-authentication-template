import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

function handleRedirectLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

function handlePopupLogout(instance) {
    instance.logoutPopup().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <React.Fragment>
            <Button variant="secondary" className="ml-auto" onClick={() => handleRedirectLogout(instance)}>Sign out using Redirect</Button>
            <Button variant="secondary" className="ml-auto" onClick={() => handlePopupLogout(instance)}>Sign out using Popup</Button>
        </React.Fragment>
        
    );
}