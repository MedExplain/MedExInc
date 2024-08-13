import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditArticle from 'components/articleEdit';
import { isUserAuthenticated } from "utils/msal";
import { handleLogin } from "utils/authUtils";

const EditArticles = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Automatically redirect to login if not authenticated
        if (!isUserAuthenticated()) {
            handleLogin(location.pathname);
        }
    }, [navigate, location]); // React to changes in authentication state or location

    // If there is no account, return null immediately
    if (!isUserAuthenticated()) {
        return null;
    }

    // Render the article editing component only if the user is authenticated
    return <EditArticle />;
};

export default EditArticles;
