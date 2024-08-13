import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isUserAuthenticated } from "utils/msal";
import { handleLogin } from "utils/authUtils";
import "./index.scss";

const AdminLinks = () => {
    const navigate = useNavigate();
    const location = useLocation();
    /*const [authenticated, setAuthenticated] = useState(isUserAuthenticated());*/

    useEffect(() => {
        // Redirect to login if not authenticated
        if (!isUserAuthenticated()) {
            handleLogin(location.pathname);
        }
    }, [navigate, location]); // React to changes in authentication state or location

    // If there is no account, return null immediately
    if (!isUserAuthenticated()) {
        return null;
    }

    //useEffect(() => {
    //    if (!authenticated) {
    //        // Redirect to login and pass current location as state to return to this page after login
    //        navigate('/Admin/SignIn', { state: { from: location } });
    //    }
    //}, [authenticated, navigate, location]);

    //if (!authenticated) {
    //    return null;  // Render nothing if not authenticated
    //}

    return (
        <div style={{ marginTop: '80px' }}>
            <a href="/Admin/NewArticle">Create New Article</a><br />&#160;<br />
            <a href="/Admin/ListArticles">List of Articles</a><br />&#160;<br />
            <hr />
            <a href="/Admin/NewVideo">Create New Video</a><br />&#160;<br />
            <a href="/Admin/ListVideos">List of Videos</a><br />&#160;<br />
            <hr />
            <a href="/Admin/NewAuthor">Create New Author</a><br />&#160;<br />
            <a href="/Admin/ListAuthors">List of Authors</a><br />&#160;<br />
            <hr />
            <a href="/Admin/ListSubCategories">List of Subcategories</a><br />&#160;<br />
        </div>
    );
};

export default AdminLinks;
