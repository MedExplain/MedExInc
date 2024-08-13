import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CosmosClient } from "@azure/cosmos";
import './articles.css';

export default function ArticlesList() {
    const client = new CosmosClient({
        endpoint: process.env.REACT_APP_COSMOS_ENDPOINT,
        key: process.env.REACT_APP_COSMOS_KEY
    });
    const database = client.database("MedExDB");
    const articlesContainer = database.container("articles");

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const { resources } = await articlesContainer.items.readAll().fetchAll();
            // Sort the articles by date in descending order (newest first)
            const sortedResources = resources.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));
            setArticles(sortedResources);
        };

        fetchArticles();
    }, []);

    const renderArticlesTable = (status, heading) => {
        const filteredArticles = articles.filter(article => article.publication_status === status);
        return (
            <>
                <h2>{heading}</h2>
                <table>
                    <thead>
                        <tr>
                            <th className="table-header title-column">Title</th>
                            <th className="table-header">Last Edited</th>
                            <th className="table-header">Last Edited By</th>
                            <th className="table-header" colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredArticles.map(article => (
                            <tr key={article.id}>
                                <td className="title-column">{article.title}</td>
                                <td>{new Date(article.publication_date).toLocaleDateString()}</td>
                                <td>{article.last_edited_by}</td>
                               <td>
                                   <a href={`/Admin/EditArticle?id=${article.id}`} target="_blank" style={{ marginRight: '10px' }}>Edit</a>
                                </td>
                                  <td>
                                    {article.publication_status === 'published' && (
                                      /*  <Link to={`/articles?title=${article.title}`}>View on Site</Link>*/
                                        <a href={`/articles?title=${article.title}`} target="_blank" style={{ marginRight: '10px' }}>View on Site</a>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    };

    return (
        <div>
            <h1 style={{ paddingTop: '10px' }}>Articles</h1>
            <Link to="/Admin/NewArticle" className="add-new-article-button">Add New Article</Link>
            {renderArticlesTable('published', 'Published Articles')}
            {renderArticlesTable('draft', 'Draft Articles')}
            {renderArticlesTable('archived', 'Archived Articles')}
            <h2>Last 10 Published</h2>
            <table>
                <thead>
                    <tr>
                        <th className="table-header title-column">Title</th>
                        <th className="table-header">Published Date</th>
                        <th className="table-header" colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.filter(article => article.publication_status === 'published')
                        .slice(0, 10) // Assuming articles are already sorted by date
                        .map(article => (
                            <tr key={article.id}>
                                <td className="title-column">{article.title}</td>
                                <td>{new Date(article.publication_date).toLocaleDateString()}</td>
                                <td>
                                    <Link to={`/Admin/EditArticle?id=${article.id}`} style={{ marginRight: '10px' }}>Edit</Link>
                                </td>
                                <td>
                                    <Link to={`/articles?title=${article.title}`}>View on Site</Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
