import React, { useState } from 'react';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const uploadImageToBlob = (imageFile, onSuccess, onError, onProgress) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    fetch(`${API_BASE_URL}/uploadImage?type=headshots`, {
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
                const imageUrl = `https://yourbloblink${result.blobName}`;
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

function AuthorImageUpload() {
    const [selectedFiles, setSelectedFiles] = useState([null]); // Initialize with only one null
    const [uploadUrls, setUploadUrls] = useState([]);

    const handleFileChange = (index, event) => {
        const newFiles = [...selectedFiles];
        newFiles[index] = event.target.files[0];
        setSelectedFiles(newFiles);
    };

    const handleUpload = (index) => {
        const file = selectedFiles[index];
        if (!file) {
            alert('Please select a file to upload');
            return;
        }

        uploadImageToBlob(
            file,
            (imageUrl) => {
                console.log('Image URL:', imageUrl);
                setUploadUrls(prevUrls => [...prevUrls, imageUrl]);
            },
            (error) => console.error('Upload error:', error),
            (progress) => console.log('Upload progress:', progress)
        );
    };

    //const addNewUploadInput = () => {
    //    setSelectedFiles([...selectedFiles, null]);
    //};

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
            {selectedFiles.map((file, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <input type="file" onChange={(e) => handleFileChange(index, e)} accept="image/*" style={{ marginRight: '5px' }} />
                    <button onClick={() => handleUpload(index)} style={buttonStyle}>Upload Image</button>
                </div>
            ))}
         {/*   <button onClick={addNewUploadInput} style={buttonStyle}>+ Add More Images</button>*/}
            <div style={{ marginTop: '20px' }}>
                {uploadUrls.map((url, index) => (
                    <div key={index} style={{ marginBottom: '5px' }}>
                        <input type="text" value={url} readOnly style={inputStyle} />
                        <button onClick={() => navigator.clipboard.writeText(url)} style={buttonStyle}>Copy URL</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AuthorImageUpload;