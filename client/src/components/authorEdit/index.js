// EditAuthor.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CosmosClient } from "@azure/cosmos";
import { Link } from 'react-router-dom';
import AuthorImageUpload from 'components/imageUploadAuthor';
import './authors.css';

export default function EditAuthor() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const authorId = queryParams.get('id');

    const client = new CosmosClient({
        endpoint: process.env.REACT_APP_COSMOS_ENDPOINT,
        key: process.env.REACT_APP_COSMOS_KEY
    });
    const database = client.database("MedExDB");
    const authorsContainer = database.container("authors");

    const [authorName, setAuthorName] = useState('');
    const [authorCredentials, setAuthorCredentials] = useState('');
    const [authorTitle, setAuthorTitle] = useState('');
    const [authorEmail, setAuthorEmail] = useState('');
    const [authorHeadshotLink, setAuthorHeadshotLink] = useState('');
    const [authorAffiliations, setAuthorAffiliations] = useState('');
    const [authorSponsors, setAuthorSponsors] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchAuthorDetails = async () => {
            if (authorId) {
                const { resource } = await authorsContainer.item(authorId).read();
                setAuthorName(resource.name);
                setAuthorCredentials(resource.credentials);
                setAuthorTitle(resource.author_title);
                setAuthorEmail(resource.email);
                setAuthorHeadshotLink(resource.headshot_link);
                setAuthorAffiliations(resource.affiliations);
                setAuthorSponsors(resource.sponsors);
            }
        };

        fetchAuthorDetails();
    }, [authorId]);

    const handleUpdateAuthor = async (e) => {
        e.preventDefault();
        const updatedAuthorData = {
            id: authorId,
            name: authorName,
            credentials: authorCredentials,
            author_title: authorTitle,
            email: authorEmail,
            headshot_link: authorHeadshotLink,
            affiliations: authorAffiliations,
            sponsors: authorSponsors,
        };

        try {
            await authorsContainer.item(authorId).replace(updatedAuthorData);
            setSuccessMessage("Author updated successfully!");

            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error("Error updating author: ", error);
            setSuccessMessage("Failed to update author. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <Link to="/Admin/ListAuthors">Back to Authors List</Link>
            <h1>Edit Author</h1>
            <div>
                <label className="label">Upload Headshot</label>
                <AuthorImageUpload />
            </div>
            <form onSubmit={handleUpdateAuthor} className="author-form">
                <div className="form-group">
                    <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder="Author Name" className="form-input" required />
                </div>
                <div className="form-group">
                    <input type="text" value={authorCredentials} onChange={(e) => setAuthorCredentials(e.target.value)} placeholder="Credentials" className="form-input" />
                </div>
                <div className="form-group">
                    <input type="text" value={authorTitle} onChange={(e) => setAuthorTitle(e.target.value)} placeholder="Title" className="form-input" />
                </div>
                <div className="form-group">
                    <input type="text" value={authorHeadshotLink} onChange={(e) => setAuthorHeadshotLink(e.target.value)} placeholder="Headshot Link" className="form-input" />
                </div>
                <div className="form-group">
                    <input type="text" value={authorEmail} onChange={(e) => setAuthorEmail(e.target.value)} placeholder="Email" className="form-input" />
                </div>
                <div className="form-group">
                    <input type="text" value={authorAffiliations} onChange={(e) => setAuthorAffiliations(e.target.value)} placeholder="Affiliations" className="form-input" />
                </div>
                <div className="form-group">
                    <input type="text" value={authorSponsors} onChange={(e) => setAuthorSponsors(e.target.value)} placeholder="Sponsors" className="form-input" />
                </div>
                <button type="submit" className="submit-button">Update Author</button>
            </form>
            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    );
}
