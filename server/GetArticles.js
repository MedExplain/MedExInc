import { CosmosClient } from "@azure/cosmos";
import express from 'express';
import { SecretClient } from "@azure/keyvault-secrets";
import { DefaultAzureCredential } from "@azure/identity";

const vaultUrl = 'your_vault_url'; // Placeholder for Key Vault URL
const credential = new DefaultAzureCredential();
const secretClient = new SecretClient(vaultUrl, credential);

const databaseId = 'your_database_id'; // Placeholder for database ID
const containerId = 'your_container_id'; // Placeholder for container ID
const authorContainerId = 'your_author_container_id'; // Placeholder for author container ID

let container;
let authorContainer;

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const title = req.query.title;
        let query = "SELECT * FROM yourdb WHERE yourdb.publication_status = 'published'";
        if (title) {
            query += ` AND UPPER(yourdb.title) = UPPER('${title}') `;
        }
        query += " ORDER BY yourdb.publication_date DESC"; // new line
        const { resources } = await container.items
            .query(query, { enableCrossPartitionQuery: true })
            .fetchAll();

        const resourcesFiltered = resources.length > 0 ? [resources[0]] : [];

        const articlesWithAuthors = await Promise.all(resourcesFiltered.map(async (article) => {
            const authorIds = [article.author].concat(article.coauthors || []);
            const authors = await Promise.all(authorIds.map(async (authorId) => {
                const authorQuery = `SELECT * FROM yourdb2 WHERE authors.id = '${authorId}'`;
                const { resources: authorResources } = await authorContainer.items
                    .query(authorQuery, { enableCrossPartitionQuery: true })
                    .fetchAll();
                return authorResources[0];
            }));

            return { ...article, authors };
        }));

        res.status(200).json(articlesWithAuthors);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "An error occurred while processing the request.",
        });
    }
});

export async function setupClient(endpoint, primaryKey) {
    const client = new CosmosClient({
        endpoint: 'your_endpoint', // Placeholder for endpoint
        key: 'your_primary_key' // Placeholder for primary key
    });

    container = client.database(databaseId).container(containerId);
    authorContainer = client.database(databaseId).container(authorContainerId);
}

export default router;
