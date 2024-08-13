


6
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import https from 'https';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import GetArticles, { setupClient } from './GetArticles.js';
import fetch from 'node-fetch';
import FormData from 'form-data';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { BlobServiceClient } from '@azure/storage-blob';

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Explicitly configure CORS middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/uploadImage', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send({ error: 'No image provided.' });
    }

    // Retrieve the type from query parameters or request body
    const uploadType = req.query.type || 'articleimages'; // Default to 'articleimages' if not specified

    let folderName = '';
    if (uploadType === 'headshots') {
        folderName = 'headshots/';
    } else {
        // Default folder
        folderName = 'articleimages/';
    }

    const blobName = folderName + new Date().toISOString() + '-' + req.file.originalname;

    try {
        const containerClient = blobServiceClient.getContainerClient('yourimages');
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        const uploadBlobResponse = await blockBlobClient.upload(req.file.buffer, req.file.buffer.length);

        res.status(200).json({
            message: 'File uploaded to Azure Blob Storage',
            blobName: blobName,
            containerName: 'yourimages', // Corrected container name
            uploadBlobResponse: uploadBlobResponse
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});


// Using GetArticles directly without the additional middleware for headers since CORS middleware is already applied globally
app.use('/api/articles', GetArticles);

const port = process.env.PORT || 3000;

async function startServer() {
    if (process.env.NODE_ENV === 'production') {
        const [endpointResult, keyResult] = await Promise.all([
            secretClient.getSecret("REACT-APP-COSMOS-ENDPOINT"),
            secretClient.getSecret("REACT_APP_COSMOS_KEY")
        ]);

        await setupClient(endpointResult.value, keyResult.value);
    } else {
        await setupClient(process.env.REACT_APP_COSMOS_ENDPOINT, process.env.REACT_APP_COSMOS_KEY);
    }

    if (process.argv[2] !== 'start-dev') {
        const options = {
            key: fs.readFileSync(path.join(__dirname, '../certs/your_private.key')),
            cert: fs.readFileSync(path.join(__dirname, '../certs/your.pem'))
        };

        https.createServer(options, app).listen(port, () => console.log(`Server listening on port ${port}`));
    } else {
        app.listen(port, () => console.log(`Server listening on port ${port}`));
    }
}

startServer();