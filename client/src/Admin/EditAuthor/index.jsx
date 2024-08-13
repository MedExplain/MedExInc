import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";
import EditAuthor from 'components/authorEdit';
import { isUserAuthenticated } from "utils/msal";
import { handleLogin } from "utils/authUtils";

const AuthorEdit = () => {
    const location = useLocation();

    useEffect(() => {
        // Redirect to login if not authenticated
        if (!isUserAuthenticated()) {
            handleLogin(location.pathname);
        }
    }, [location]); // React to changes in authentication state or location

    // If there is no account, return null immediately
    if (!isUserAuthenticated()) {
        return null;
    }

    // Render the EditAuthor component only if the user is authenticated
    return <EditAuthor />;
};

export default AuthorEdit;
