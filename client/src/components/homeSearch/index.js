import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch";  
import { InstantSearch, Hits, Configure } from "react-instantsearch-dom";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './search.css';

// Define the base URL for your Icons8 images
const ICONS8_BASE_URL = "https://yourbloblinkIcons8/";

// algolia client
const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_KEY,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack children vertically
 /* align-items: center; // Center-align children horizontally*/
  justify-content: center; // Center-align children vertically (optional, if you want vertical centering)
  background: linear-gradient(150.7deg, #DBE4FF 13.64%, rgba(255, 255, 255, 0.18) 91.98%);
   padding: 20px; // Add padding as needed
`;

const SearchContainer = styled.div`
  position: relative;
  width: 90%; // Take up 90% of the parent width
  max-width: 800px; // Allows the container to be wider on larger screens
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

const Title = styled.h1`
  font-size: 48px; 
  color: #000000; 
  font-weight: 600;
  margin-bottom: 30px;
  margin-top:60px;
  line-height: 1.2; // Increased line height for more space between lines
  font-family: 'Roboto', sans-serif;
  text-align: center;
  letter-spacing: 1.0px; // Adjust as needed for more space between characters
   @media (max-width: 768px) {
    font-size: 22px; 
      margin-bottom: 5px;
     margin-top:10px;
  }
   `;

const Subtitle = styled.p`
  font-size: 20px; 
   font-weight: 600;
  color: #000000; 
   font-family: 'Roboto', sans-serif;
   text-align:center;
   padding-bottom:35px;
  // Add other styles like line-height, margin, etc.
     @media (max-width: 768px) {
    font-size: 12px; 
      padding-bottom:10px;
  }
`;

const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Three columns by default
  gap: 24px;
  justify-content: center;
 /* padding: 20px;*/
  max-width: 1000px;
  margin: auto;
  margin-bottom: 60px; 

  @media (max-width: 768px) { // Adjust the breakpoint as needed
    grid-template-columns: 1fr; // Single column on mobile
      margin-bottom: 2px; 
  }
`;

const ArticleItem = styled.div`
  background: #FFFFFF;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 320px;
  width: 100%;
  min-height: 110px;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    // Add any mobile-specific styles here
   /* flex-direction: column;*/ // Stack icon and text vertically on mobile
    align-items: start; // Align items to the start on mobile

     a {
    padding-left: 5px;
    line-height: 1.1;
    font-size: 14px;
   }
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    padding-left: 10px;
    padding-right: 3px;
    line-height: 1.1;
    font-size: 18px;
    color: #000000;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
`;

const IconDiv = styled.div`
   width: 50px; 

    @media (max-width: 768px) {
      width: 50px; 
  }
`;

const ImageIcon = styled.img`
  width: 40px; // Set the width as needed
  height: auto; // Maintain aspect ratio

  @media (max-width: 768px) {
    width: 35px; // Adjust size for smaller screens if necessary
  }
`;

const ArticlesHeading = styled.h2`
  font-size: 22px; // Set the font size as needed
  color: #000000; // Adjust the color as needed
  font-weight: bold; // If you want the heading to be bold
  margin-top: 110px; // Space above the heading
  text-align: left; 
  font-family: 'Roboto', sans-serif; // Your chosen font family
  padding-left: 5px;
  padding-bottom: 16px;
     @media (max-width: 768px) {
   margin-top: 40px;
  }
`;

const LeftAlignedContainer = styled.div`
    width: 100%; // Takes the full width to center the inner content
    max-width: 1000px; // Max width as required
    margin: 0 auto; // Auto margins for horizontal centering in the parent
 /*   padding: 20px;*/
    box-sizing: border-box; // Makes sure padding is included in the width
    text-align: left; // Aligns the text to the left
`;
//const handleChange = (value) => {
//    //if (value === "") setIsOpen(false);
//    //else setIsOpen(true);
//};

const HomeSearch = () => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(searchInput.length > 0);
    }, [searchInput]);

    // Triggered when the form is submitted
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (searchInput.trim()) {
            navigate(`/search/${searchInput}`);
        }
    };

    // Updates the search input state as the user types
    const handleChange = (event) => {
        setSearchInput(event.currentTarget.value);
    };

    // Function to get the full URL of an image
    const getImageUrl = (imageName) => `${ICONS8_BASE_URL}${imageName}`;

    return (
        <MainContainer>
            <Title>Reliable answers to your<br/>medical questions.</Title>
            <Subtitle>We provide accessible, easy-to-understand health<br />
                information backed by trustworthy medical research.</Subtitle>  
            <InstantSearch searchClient={searchClient} indexName="dev_med_articles">
                <form onSubmit={handleFormSubmit}>
                    <SearchContainer>
                        <SearchIcon />
                        <ResponsiveSearchInput
                            type="search"
                            value={searchInput}
                            onChange={handleChange}
                            placeholder="Search a symptom, medicine, illness, or any health-related topic"
                            autoFocus
                        />
                        <SearchButton type="submit">Search</SearchButton>
                    </SearchContainer>
                </form>
                {isOpen && (
                    <Content>
                        <Configure hitsPerPage={5} />
                        <Hits hitComponent={Hit} />
                    </Content>
                )}
            </InstantSearch>       
            <LeftAlignedContainer>
                <ArticlesHeading>Popular Articles</ArticlesHeading>
            </LeftAlignedContainer>
                <ArticleList>
                    {/* Example articles - this section can be dynamic based on actual content */}
                  <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill.png")} alt="pill" /></IconDiv><a href="/articles?title=What should I do if I accidentally take an extra dose of amlodipine?">What should I do if I accidentally take an extra dose of amlodipine?</a></ArticleItem>
                    <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill Bottle.png")} alt="pill bottle" /></IconDiv><a href="/articles?title=How long will it take for amlodipine to lower my blood pressure?">How long will it take for amlodipine to lower my blood pressure?</a></ArticleItem>
                    <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill.png")} alt="pill" /></IconDiv><a href="/articles?title=What should I do if I accidentally take an extra dose of hydrochlorothiazide?">What should I do if I accidentally take an extra dose of hydrochlorothiazide  (HCTZ)?</a></ArticleItem>
                    <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill.png")} alt="pill" /></IconDiv><a href="/articles?title=What should I do if I accidentally take an extra dose of beta blocker?">What should I do if I accidentally take an extra dose of beta blocker?</a></ArticleItem>
                    <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill.png")} alt="pill" /></IconDiv><a href="/articles?title=What should I do if I accidentally take an extra dose of carvedilol?">What should I do if I accidentally take an extra dose of carvedilol?</a></ArticleItem>
                    <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill.png")} alt="pill" /></IconDiv><a href="/articles?title=What should I do if I accidentally take an extra dose of spironolactone?">What should I do if I accidentally take an extra dose of spironolactone?</a></ArticleItem>
                </ArticleList>
               
        </MainContainer>
    );
};
function Hit({ hit }) {
    return (
        <a href={hit.permalink} target="_blank" rel="noreferrer">
            <span>{hit.post_title}</span>
        </a>
    );
}

export default HomeSearch;


