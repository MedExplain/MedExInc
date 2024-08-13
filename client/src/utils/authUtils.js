// authUtils.js
import { msalInstance } from "./msal";

// Generalized function to initiate login with dynamic state handling
export const handleLogin = (returnPath) => {
    const loginRequest = {
        scopes: ["scope1", "scope2"],  // Placeholder scopes
        redirectUri: 'your_redirect_uri',  // Placeholder for redirect URI
        state: returnPath  // State used to redirect back after authentication
    };

    msalInstance.loginRedirect(loginRequest).catch((error) => {
        // Placeholder for error handling
        console.error("Login error");
    });
};

