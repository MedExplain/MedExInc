import React, { useState } from 'react';
import Modal from 'react-modal';
import { CosmosClient } from "@azure/cosmos";
import { Link } from 'react-router-dom';
import './authors.css';
import AuthorImageUpload from 'components/imageUploadAuthor';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const IMAGE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
Modal.setAppElement('#root');

export default function TinyMCEAuthor() {
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
    const [successMessage, setSuccessMessage] = useState(''); // New state for success message

    const handleAddAuthor = async (e) => {
        e.preventDefault();
        const authorData = {
            name: authorName,
            credentials: authorCredentials,
            author_title: authorTitle, 
            email: authorEmail,
            headshot_link: authorHeadshotLink,
            affiliations: authorAffiliations,
            sponsors: authorSponsors,
        };

        try {
            await authorsContainer.items.create(authorData);
            setSuccessMessage("Author added successfully!"); // Set success message
            // Reset form fields
            setAuthorName('');
            setAuthorCredentials('');
            setAuthorTitle('')
            setAuthorEmail('');
            setAuthorHeadshotLink('');
            setAuthorAffiliations('');
            setAuthorSponsors('');

            // Optional: Hide the message after a few seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error("Error adding author: ", error);
            setSuccessMessage("Failed to add author. Please try again."); // Set error message
        }
    };

    return (
        <div className="form-container">
            <Link to="/Admin/ListAuthors">List Authors</Link>
            <div>
                <label className="label">Upload Headshot</label>
                <AuthorImageUpload />
            </div>
            <form onSubmit={handleAddAuthor} className="author-form">
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
                <button type="submit" className="submit-button">Add Author</button>
            </form>
            {successMessage && <div className="success-message">{successMessage}</div>} {/* Display success message */}
        </div>
    );
}