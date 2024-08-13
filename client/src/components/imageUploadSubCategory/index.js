import React, { useState } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const uploadImageToBlob = (imageFile, onSuccess, onError, onProgress) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    // Updated the endpoint to include the Icons8 folder in the blob name
    fetch(`${API_BASE_URL}/uploadImage?type=subcategory_thumbnails&folder=Icons8`, {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                onProgress(100); // Indicate that the upload is complete
                return response.json();
            } else {
                throw new Error('Upload failed');
            }
        })
        .then(result => {
            if (result.blobName) {
                const imageUrl = `https://yourbloblinkIcons8/${result.blobName}`;
                onSuccess(imageUrl);
            } else {
                onError('Image upload failed: No location returned');
            }
        })
        .catch(error => {
            console.error('Upload error:', error);
            onError('HTTP Error: ' + error.message);
        });
};

function SubCategoryImageUpload({ setImageUrl }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadUrl, setUploadUrl] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!selectedFile) {
            alert('Please select a file to upload');
            return;
        }

        uploadImageToBlob(
            selectedFile,
            (imageUrl) => {
                console.log('Image URL:', imageUrl);
                setUploadUrl(imageUrl);
                setImageUrl(imageUrl); // Pass the URL back to the parent component
            },
            (error) => console.error('Upload error:', error),
            (progress) => console.log('Upload progress:', progress)
        );
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '4px',
        backgroundColor: '#827498',
        color: '#FFFFFF',
        border: 'none',
        cursor: 'pointer',
        marginTop: '20px',
        width: '185px',
        marginRight: '5px'
    };

    const inputStyle = {
        padding: '10px',
        margin: '5px 0',
        borderRadius: '4px',
        border: '1px solid #ddd',
        width: 'calc(100% - 90px)' // Adjust width according to button width
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1000px' }}>
            <div style={{ marginBottom: '10px' }}>
                <input type="file" onChange={handleFileChange} accept="image/*" style={{ marginRight: '5px' }} />
                <button onClick={handleUpload} style={buttonStyle}>Upload Image</button>
            </div>
            {uploadUrl && (
                <div style={{ marginTop: '20px' }}>
                    <input type="text" value={uploadUrl} readOnly style={inputStyle} />
                    <button onClick={() => navigator.clipboard.writeText(uploadUrl)} style={buttonStyle}>Copy URL</button>
                </div>
            )}
        </div>
    );
}

export default SubCategoryImageUpload;
