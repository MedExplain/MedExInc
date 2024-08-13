2//require('dotenv').config();
//const express = require('express');
//const https = require('https');
//const fs = require('fs');
//const { DefaultAzureCredential } = require('@azure/identity');
//const { SecretClient } = require('@azure/keyvault-secrets');

//// Create an Express app instance
//const app = express();

//// Define your routes and middleware
//app.get('/', (req, res) => {
//    res.send('Hello, HTTPS World!');
//});

//async function getCertificateAndKey() {
//    if (process.env.NODE_ENV === 'production') {
//        const vaultName = process.env['MedExVault'];
//        const url = `https://${vaultName}.vault.azure.net`;

//        const credential = new DefaultAzureCredential();
//        const client = new SecretClient(url, credential);

//        const privateKey = await client.getSecret('medexapi_private_key');
//        const certificate = await client.getSecret('medexplain_org_certificate');

//        return {
//            privateKey: privateKey.value,
//            certificate: certificate.value
//        };
//    } else {
//        // In development, read from file system
//        const privateKey = fs.readFileSync('./certs/medexapi_private.key', 'utf8');
//        const certificate = fs.readFileSync('./certs/medexplain_org.pem', 'utf8');

//        return {
//            privateKey,
//            certificate
//        };
//    }
//}

//getCertificateAndKey().then(credentials => {
//    // Create an HTTPS service with your existing app
//    const httpsServer = https.createServer(credentials, app);

//    // Start the HTTPS server on port 443
//    httpsServer.listen(443, () => {
//        console.log('HTTPS Server running on port 443');
//    });
//});





require('dotenv').config();
const express = require('express');
const https = require('https');
const fs = require('fs');

// Create an Express app instance
const app = express();

// Define your routes and middleware
app.get('/', (req, res) => {
    res.send('Hello, HTTPS World!');
});

// Read the certificate and private key files
const privateKey = fs.readFileSync('./certs/medexapi_private.key', 'utf8');
const certificate = fs.readFileSync('./certs/medexplain_org.pem', 'utf8');

// Create an HTTPS service with your existing app
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);

// Start the HTTPS server on port 443
httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});
