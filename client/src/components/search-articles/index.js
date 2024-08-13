import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch";  
import { InstantSearch, Hits, Configure } from "react-instantsearch-dom";
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

//change this one
// mui
//import { styled } from "@mui/material/styles";
//import { Box, Typography } from "@mui/material";

import './search.css';

// components
import { CustomSearchBox } from "../SearchBox";

// algolia client

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_KEY,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

// ----------------------------------------------------------------------
//const RootStyle = styled(Box)({
//    // minHeight: "calc(100vh - 124px)",
//});

const SearchContainer2 = styled.div`
  position: relative;
  /*width: 90%; */// Take up 90% of the parent width
  /*max-width: 800px; */// Allows the container to be wider on larger screens
  display: flex;
  justify-content: center;
  margin: 20px auto; // Center in the available space with margin

  @media (max-width: 768px) {
    width: 95%; // Slightly more width on smaller screens
    padding: 0 15px; // Padding inside the container
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px; // Adjusted for closer to input
  top: 50%;
  height: 15px;
  transform: translateY(-50%);
  color: #939393;
  z-index: 10;

  @media (max-width: 768px) {
    left: 20px; // Adjust if needed for smaller screens
  }
`;

const ResponsiveSearchInput = styled.input`
  width: 100%; // Take up all available width
  padding: 10px 35px; // Padding inside the input for text and icon
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 16px;

 @media (max-width: 768px) {
    padding-left: 35px; // Adjust padding for icon space
      font-size: 9px;
  }
`;

const SearchButton = styled.button`
  padding: 13px 40px;
  border-radius: 12px;
  border: none;
  background-color: #3C3E79;
  color: white;
  cursor: pointer;
  font-size: 16px; 
  margin-left: 5px;
  // ... other styles
  &:hover {
    background-color: #2e2f6b;
  }
      @media (max-width: 768px) {
    font-size: 12px; 
     padding: 13px 10px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack children vertically
  /*align-items: center; // Center-align children horizontally*/
  justify-content: center; // Center-align children vertically (optional, if you want vertical centering)
  /*background: linear-gradient(150.7deg, #DBE4FF 13.64%, rgba(255, 255, 255, 0.18) 91.98%);*/
   padding: 20px; // Add padding as needed
`;

const Content = styled.div`
 background-color: white;
  margin-top: 1rem; // Adds space between the search bar and results
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 1rem;
  box-sizing: border-box; 
  max-height: 300px; // Or whatever maximum height you prefer
  overflow-y: auto; // Adds scroll to the results container if the content overflows

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & li {
    cursor: pointer;

    & a {
      display: block;
      padding: 0.5rem 1rem;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.2;
      text-decoration: none;
      color: inherit;

      &:hover {
        background: rgba(145, 158, 171, 0.16);
      }
    }
  }
`;

const SearchArticles = () => {
    const [searchInput, setSearchInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsOpen(searchInput.length > 0);
    }, [searchInput]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchInput.trim()) {
            navigate(`/search/${searchInput}`);
        }
    };

    const handleChange = (event) => {
        setSearchInput(event.currentTarget.value);
    };

    return (
        <MainContainer>
            {/*<Title>Reliable answers to your<br />medical questions.</Title>*/}
            {/*<Subtitle>We provide accessible, easy-to-understand health<br />*/}
            {/*    information backed by trustworthy medical research.</Subtitle>*/}
            <InstantSearch searchClient={searchClient} indexName="dev_med_articles">
                <form onSubmit={handleSearchSubmit}>
                    <SearchContainer2>
                        <SearchIcon />
                        <ResponsiveSearchInput
                            type="search"
                            value={searchInput}
                            onChange={handleChange}
                            placeholder="Search a symptom, medicine, illness, or any health-related topic"
                            autoFocus
                        />
                        <SearchButton type="submit">Search</SearchButton>
                    </SearchContainer2>
                </form>
                {isOpen && (
                    <Content>
                        <Configure hitsPerPage={5} />
                        <Hits hitComponent={Hit} />
                    </Content>
                )}
            </InstantSearch>
        </MainContainer>
    );
}

function Hit({ hit }) {
    return (
        <a href={hit.permalink} target="_blank" rel="noreferrer">
            <span>{hit.post_title}</span>
        </a>
    );
}

export default SearchArticles;