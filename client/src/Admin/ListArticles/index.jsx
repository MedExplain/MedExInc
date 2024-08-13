import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";
import ArticlesList from 'components/articleList';
import { isUserAuthenticated } from "utils/msal";
import { handleLogin } from "utils/authUtils";

const ListArticles = () => {
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

    // Render the ArticlesList component only if the user is authenticated
    return <ArticlesList />;
};

export default ListArticles;
