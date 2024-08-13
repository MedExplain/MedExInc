import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import algoliaIndex from "../config/algoliasearch";

const initialState = {
    articles: [],
    loading: false,
};
export const getPopularData = createAsyncThunk(
    "search/getPopularData",
    async () => {
        try {
            const response = await algoliaIndex.search("", {
                hitsPerPage: 6,
                facetFilters: [["categories:Popular"]],
                cacheable: false
            });
             console.log("response: ", response);
            return response;
        } catch (error) {
            console.error("Error fetching popular data:", error);
            throw error;
        }
    }
);

//export const getPopularData = createAsyncThunk(
//    "search/getPopularData",
//    async () => {
//        const response = await algoliaIndex.search("", {
//            hitsPerPage: 6,
//            facetFilters: [["categories:Popular"]],
//        });
//        console.log("response: ", response);
//        return response;
//    }
//);

const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPopularData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getPopularData.fulfilled, (state, action) => {
            state.articles = action.payload.hits;
            state.loading = false;
        });
        builder.addCase(getPopularData.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default articleSlice.reducer;
