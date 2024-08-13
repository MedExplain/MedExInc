import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
    ActionIconsContainerDesktop,
    ActionIconsContainerMobile,
    MyList,
} from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import { ListItemText } from "@mui/material";
//import FavoriteIcon from "@mui/icons-material/Favorite";
//import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Colors } from "../../styles/theme";
import React from "react";
import algoliasearch from "algoliasearch";
import {
    InstantSearch,
    SearchBox,
    Hits,
    Highlight,
} from "react-instantsearch-hooks-web";
// import { SearchBox, Hits } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_KEY,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

const config = {
    searchClient,
    indexName: "dev_med_articles",
    cacheResponses: false
};
// const algoliaIndex = searchClient.initIndex("");
/*export default algoliaIndex;*/

export default function Actions({ matches }) {
    const Component = matches
        ? ActionIconsContainerMobile
        : ActionIconsContainerDesktop;
    return (
     <Component>
            <MyList type="row">
                {/*We don't want the below to show. It was just for testing.*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        <InstantSearch {...config}>*/}
                {/*            <SearchBox placeholder="Search" />*/}
                {/*            <Hits hitComponent={Hit} />*/}
                {/*        </InstantSearch>*/}
                {/*    </ListItemIcon>*/}
                {/*</ListItemButton>*/}
             </MyList>
    </Component>
  );
}

function Hit({ hit }) {
    return (
        <>
            <Highlight hit={hit} attribute="post_title" />
            <span>${hit.author_name}</span>
        </>
    );
}
