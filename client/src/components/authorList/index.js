import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CosmosClient } from "@azure/cosmos";
import './authors.css';

export default function AuthorsList() {
    const client = new CosmosClient({
        endpoint: process.env.REACT_APP_COSMOS_ENDPOINT,
        key: process.env.REACT_APP_COSMOS_KEY
    });
    const database = client.database("MedExDB");
    const authorsContainer = database.container("authors");

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            const { resources } = await authorsContainer.items.readAll().fetchAll();
            // Sort authors alphabetically by last name
            const sortedAuthors = resources.sort((a, b) => {
                const lastNameA = a.name.split(" ").pop().toLowerCase(); // Extract last name by splitting the name string
                const lastNameB = b.name.split(" ").pop().toLowerCase();
                return lastNameA.localeCompare(lastNameB); // Use localeCompare for alphabetical comparison
            });
            setAuthors(sortedAuthors);
        };

        fetchAuthors();
    }, []);

    return (
        <div>
            <h1 style={{ paddingTop: '10px' }}>Authors</h1>
            <Link to="/Admin/NewAuthor" className="add-new-author-button">Add New Author</Link>
            <table>
                <thead>
                    <tr>
                        <th className="table-header">Name</th>
                        <th className="table-header">Credentials</th>
                        <th className="table-header">Email</th>
                        <th className="table-header">Actions</th>
                        <th className="table-header">Headshot</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, index) => (
                        <tr key={author.id}>
                            <td>{author.name}</td>
                            <td>{author.credentials}</td>
                            <td>{author.email}</td>
                            <td>
                                <Link to={`/Admin/EditAuthor?id=${author.id}`}>Edit</Link>
                            </td>
                            <td>
                                {author.headshot_link ? 'Yes' : <span className="no-headshot">No</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
