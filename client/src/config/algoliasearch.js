import algoliasearch from "algoliasearch";

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_KEY,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

const algoliaIndex = searchClient.initIndex("dev_med_articles");

export const algoliaSearchIndex = searchClient.initIndex("dev_med_articles");

export default algoliaIndex;
