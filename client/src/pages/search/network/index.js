import { algoliaSearchIndex } from "config/algoliasearch";

export async function fetchAlgoliaSearch(activeTab, searchTerm, page, limit) {
  try {
    const value = searchTerm || ""
    let response = null;

    if (activeTab === 'all') {
      response = await algoliaSearchIndex.search(value, {
        hitsPerPage: limit,
        page: page - 1,
      });
    } else {
      response = await algoliaSearchIndex.search(value, {
        hitsPerPage: limit,
        page: page - 1,
        facetFilters: [[`categories:${activeTab}`]],
      });
    }

    const data = await response;
    return { searchData: data.hits, totalCount: data.nbHits };
  } catch (err) {
    throw new Error(err.message)
  }
}
