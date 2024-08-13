import styled from 'styled-components';

//article page

export const BackToResultsLink = styled.a`
  display: flex;
  align-items: center;
  color: #007bff; // Adjust the color as needed
  text-decoration: none;
  padding: 10px;
  margin-bottom: 20px; // Adjust spacing as needed

  &:hover {
    text-decoration: underline;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack the children vertically
  width: 100%;
`;

export const TopControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 margin-left: 80px;
 `;

/*preview*/

export const TopControlsPreview = styled.div`
  display: flex;
  align-items: right;
  margin-bottom: 20px; 
  float:right;
`;
/*article and preview*/

export const placeholderHeadshot = "https://yourbloblink/-user_profile_placeholder.png";


export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  background-color: #29387B;  /*86BFFF*/
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    margin-right: 5px;
  }

  &:hover {
    background-color: #A971DE;
  }

  @media (max-width: 768px) {
    padding: 5px; // Reduce padding
    font-size: 12pt; // Reduce font size
    cursor: pointer;
    img {
      width: 24px; // Reduce image size
      height: 24px;
    }
    margin-right: 10px; 
  }
`;
export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row; // Horizontal layout for the article sections
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; // Stack vertically on mobile
  }
`;

export const ContentContainer = styled.div`
  flex: 1; // Takes the remaining space
  padding: 20px; // Space inside the main content area
  margin-top:8px;
`;

export const AuthorsContainer = styled.div`
  display: flex;
  //justify-content: center; /* This will place content at the start and end */
  //align-items: center; /* Align items vertically */
  width:100%;

  @media (max-width: 768px) { /* Adjust the max-width as needed for your design */
    flex-direction: row; /* Stack children elements vertically on smaller screens */
  }
`;

export const Author = styled.div`
  margin: 5px 20px; /* Adjust spacing as needed */
  flex: 0 1 calc(10% - 10px); /* Adjust width as needed, assuming 5px margin */
  color:#433592;

  @media (max-width: 768px) {
    flex: 0 1 calc(0% - 10px); /* Make each author take full width on smaller screens */
  }
`;

export const PalsLogoContainer = styled.div`
  display: flex;
  align-items: left; // Align items in the center vertically
  justify-content: left; // Align items in the center horizontally
  padding: 20px; // Space from the top
  background-color: #fff; // Assuming the card is white
  border: 1px solid #ccc; // Light gray border, adjust the color as needed
  border-radius: 10px; // Adjust the border radius for rounded corners as needed
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Optional: adds a subtle shadow, remove if not needed
  max-width: 550px; // Adjust the width as needed
  
  @media (max-width: 768px) {
    flex-direction: column; // Stack vertically on mobile devices
    align-items: center; // Center align in mobile view
    justify-content: center; // Ensure contents are centered horizontally in mobile view
  }
`;

export const PalsText = styled.p`
  margin-left: 10px; // Space between logo and text
  max-width: 250px; // Limit the width to manage text wrapping
  text-align: left; // Align text to the left
  font-size: 0.7em; // Smaller font size
  line-height: 1.2; // Line height for better readability
  color: black; // Set the text color #433592
   font-weight: 500;
`;

export const RelatedArticlesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Three columns by default
  gap: 24px;
  justify-content: center;
 /* padding: 20px;*/
  max-width: 1000px;
  margin: auto 0px;
  margin-bottom: 60px; 

  @media (max-width: 768px) { // Adjust the breakpoint as needed
    grid-template-columns: 1fr; // Single column on mobile
      margin-bottom: 2px; 
  }
`;

export const ArticleItem = styled.div`
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

export const IconDiv = styled.div`
   width: 50px; 

    @media (max-width: 768px) {
      width: 50px; 
  }
`;

export const ImageIcon = styled.img`
  width: 40px; // Set the width as needed
  height: auto; // Maintain aspect ratio

  @media (max-width: 768px) {
    width: 35px; // Adjust size for smaller screens if necessary
  }
`;