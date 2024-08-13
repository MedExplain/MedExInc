import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CosmosClient } from "@azure/cosmos";
import './categories.css';

export default function SubCategoriesList() {
    const client = new CosmosClient({
        endpoint: process.env.REACT_APP_COSMOS_ENDPOINT,
        key: process.env.REACT_APP_COSMOS_KEY
    });
    const database = client.database("MedExDB");
    const subCategoriesContainer = database.container("sub_categories");
    const parentCategoriesContainer = database.container("parent_categories");

    const [subCategories, setSubCategories] = useState([]);
    const [parentCategories, setParentCategories] = useState([]);

    useEffect(() => {
        const fetchSubCategories = async () => {
            const { resources } = await subCategoriesContainer.items.readAll().fetchAll();
            setSubCategories(resources);
        };

        const fetchParentCategories = async () => {
            const { resources } = await parentCategoriesContainer.items.readAll().fetchAll();
            setParentCategories(resources);
        };

        fetchSubCategories();
        fetchParentCategories();
    }, []);

    const renderSubCategoriesByParentCategory = () => {
        return parentCategories.map((parentCategory, index) => {
            const filteredSubCategories = subCategories.filter(subCategory => subCategory.parent_category === parentCategory.id);

            return (
                <div key={parentCategory.id}>
                    <h2>{parentCategory.category_name}</h2>
                    <div className="subcategories-grid">
                        {filteredSubCategories.map(subCategory => (
                            <div key={subCategory.id} className="subcategory-item">
                                <h3>{subCategory.sub_category_name}</h3>
                                {subCategory.thumbnail_link ? (
                                    <img src={subCategory.thumbnail_link} alt={subCategory.thumbnail_alt || 'Icon'} className="subcategory-icon" />
                                ) : (
                                    <span className="needs-icon">Needs Icon</span>
                                )}
                                <Link to={`/Admin/EditSubCategory?id=${subCategory.id}`} className="edit-subcategory-link">Edit Subcategory</Link>
                            </div>
                        ))}
                    </div>
                    {/* Add space or divider after each parent category except the last one */}
                    {index !== parentCategories.length - 1 && <hr style={{ margin: '20px 0' }} />}
                </div>
            );
        });
    };

    return (
        <div>
            <h1 style={{ paddingTop: '10px' }}>Subcategories</h1>
            {renderSubCategoriesByParentCategory()}
        </div>
    );
}
