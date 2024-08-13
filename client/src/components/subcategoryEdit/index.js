import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CosmosClient } from "@azure/cosmos";
import './subcategories.css'; // Add your CSS file for styling

export default function EditSubCategory() {
    const [subCategory, setSubCategory] = useState(null);
    const [archive, setArchive] = useState('No'); // Default archive status is "No"
    const [thumbnail, setThumbnail] = useState('');
    const [thumbnailAlt, setThumbnailAlt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Default language to English (United States)
    const defaultLanguage = { id: "c22bbd46-3d98-49af-8cd0-2acb39e6f05f", description: "English (United States)" };
    const [language, setLanguage] = useState(defaultLanguage);

    // Extract query parameters from URL
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const subCategoryId = searchParams.get('id'); // Get subcategory ID from query string

    // Initialize Cosmos DB client
    const client = new CosmosClient({
        endpoint: process.env.REACT_APP_COSMOS_ENDPOINT,
        key: process.env.REACT_APP_COSMOS_KEY
    });
    const database = client.database("MedExDB");
    const subCategoriesContainer = database.container("sub_categories");

    // Fetch subcategory details based on ID from the query string
    const fetchSubCategory = async () => {
        setIsLoading(true);
        try {
            console.log("Fetching subcategory with ID:", subCategoryId);
            const { resource } = await subCategoriesContainer.item(subCategoryId, subCategoryId).read();
            if (resource) {
                console.log("Subcategory fetched successfully:", resource);
                setSubCategory(resource);
                setArchive(resource.archive ? 'Yes' : 'No'); // Set archive status based on fetched data
                setThumbnail(resource.thumbnail_link || ''); // Set thumbnail image
                setThumbnailAlt(resource.thumbnail_alt || ''); // Set thumbnail alt text
            } else {
                console.error("Subcategory not found");
            }
        } catch (error) {
            console.error("Error fetching subcategory:", error);
        } finally {
            setIsLoading(false);
            setIsDataLoaded(true);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!subCategory) {
            console.error("Subcategory data is missing");
            return;
        }

        // Update subcategory data
        const updatedSubCategory = {
            ...subCategory,
            language_code: language.id,
            archive: archive === 'Yes',
            thumbnail_link: thumbnail,
            thumbnail_alt: thumbnailAlt
        };

        try {
            // Replace the existing subcategory with updated data
            await subCategoriesContainer.item(subCategory.id, subCategory.id).replace(updatedSubCategory);
            console.log("Subcategory updated successfully");
            setSuccessMessage("Subcategory updated successfully!");
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000); // Clear the success message after 3 seconds
        } catch (error) {
            console.error("Error updating subcategory:", error);
        }
    };

    return (
        <div className="edit-subcategory-container">
            <button onClick={fetchSubCategory} disabled={isLoading} style={{
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '4px',
                backgroundColor: '#4CAF50',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                marginTop: '20px'
            }}>
                {isLoading ? 'Loading...' : 'Fetch SubCategory Details'}
            </button>

            {isDataLoaded && subCategory && (
                <form onSubmit={handleSubmit}>
                    <h1>Edit Subcategory: {subCategory.sub_category_name}</h1>
                    <div className="form-group">
                        <label htmlFor="thumbnailUrl">Thumbnail Image (Paste URL):</label>
                        <input
                            type="text"
                            id="thumbnailUrl"
                            value={thumbnail}
                            onChange={(e) => setThumbnail(e.target.value)}
                            placeholder="Paste URL of the thumbnail image"
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="thumbnailAlt">Thumbnail Alt Text:</label>
                        <input
                            type="text"
                            id="thumbnailAlt"
                            value={thumbnailAlt}
                            onChange={(e) => setThumbnailAlt(e.target.value)}
                            placeholder="Thumbnail Alt Text"
                            className="form-input"
                        />
                    </div>
                    <div className="innerspace">
                        <label className="label" style={{ marginRight: '10px' }}>Archive</label>
                        <select
                            value={archive}
                            onChange={e => setArchive(e.target.value)}
                            className="form-select"
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <button type="submit" className="submit-button">Save Changes</button>
                    </div>
                    {successMessage && (
                        <div style={{
                            color: 'green',
                            fontWeight: 'bold',
                            marginTop: '10px'
                        }}>
                            {successMessage}
                           
                          
                        </div>
                    )}
                </form>
            )}
             <br />
              <Link to="/Admin/ListSubCategories" style={{ color: 'green', fontWeight: 'bold' }}>
                                Return to Sub Categories
                            </Link>
        </div>
    );
}
