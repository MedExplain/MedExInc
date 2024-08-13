import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CosmosClient } from "@azure/cosmos";
import './videos.css';

export default function VideosList() {
    const client = new CosmosClient({
        endpoint: process.env.REACT_APP_COSMOS_ENDPOINT,
        key: process.env.REACT_APP_COSMOS_KEY
    });
    const database = client.database("MedExDB");
    const videosContainer = database.container("videos");

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const { resources } = await videosContainer.items.readAll().fetchAll();
            // Sort the videos by date in descending order (newest first)
            const sortedResources = resources.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));
            setVideos(sortedResources);
        };

        fetchVideos();
    }, []);

    const renderVideosTable = (status, heading) => {
        const filteredVideos = videos.filter(video => video.publication_status === status);
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
                        {filteredVideos.map(video => (
                            <tr key={video.id}>
                                <td className="title-column">{video.title}</td>
                                <td>{new Date(video.publication_date).toLocaleDateString()}</td>
                                <td>{video.last_edited_by}</td>
                               <td>
                                   <a href={`/Admin/EditVideo?id=${video.id}`} target="_blank" style={{ marginRight: '10px' }}>Edit</a>
                                </td>
                                  <td>
                                    {video.publication_status === 'published' && (
                                      /*  <Link to={`/videos?title=${video.title}`}>View on Site</Link>*/
                                        <a href={`/videos?title=${video.title}`} target="_blank" style={{ marginRight: '10px' }}>View on Site</a>
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
            <h1 style={{ paddingTop: '10px' }}>Videos</h1>
            <Link to="/Admin/NewVideo" className="add-new-video-button">Add New Video</Link>
            {renderVideosTable('published', 'Published Videos')}
            {renderVideosTable('draft', 'Draft Videos')}
            {renderVideosTable('archived', 'Archived Videos')}
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
                    {videos.filter(video => video.publication_status === 'published')
                        .slice(0, 10) // Assuming videos are already sorted by date
                        .map(video => (
                            <tr key={video.id}>
                                <td className="title-column">{video.title}</td>
                                <td>{new Date(video.publication_date).toLocaleDateString()}</td>
                                <td>
                                    <Link to={`/Admin/EditVideo?id=${video.id}`} style={{ marginRight: '10px' }}>Edit</Link>
                                </td>
                                <td>
                                    <Link to={`/videos?title=${video.title}`}>View on Site</Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
