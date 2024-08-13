import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import qs from 'qs';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import SearchArticles from "../../components/search-articles";
import { TopControlsContainer, StyledButton, ArticleContainer, ContentContainer, AuthorsContainer, Author, PalsLogoContainer, PalsText, BackToResultsLink, MainContainer, placeholderHeadshot, RelatedArticlesList } from './styledArticleComponents';
import { BulletBlockWrapper, BulletList } from 'components/articlePreview/articlePreviewComonents';
import './articles.css';
/*import BeakerIcon from 'assets/images/icons/beaker.png';*/
import PALSLogo from 'assets/images/PALS_logo.png';
// Define the base URL for your Icons8 images
const ICONS8_BASE_URL = "https://yourbloblinkIcons8/";
// Function to get the full URL of an image
const getImageUrl = (imageName) => `${ICONS8_BASE_URL}${imageName}`;

const BeakerIcon = styled.img`
  width: 28px; // Set the width as needed
  height: auto; // Maintain aspect ratio

  @media (max-width: 768px) {
    width: 24px; // Adjust size for smaller screens if necessary
  }
`;

const LearnedIcon = styled.img`
 width: 35px;
  height: 38px !important;

  @media (max-width: 768px) {
    width: 28px; // Adjust size for smaller screens if necessary
  }
`;
const ArticleIcon = styled.img`
  width: 60px; // Set the width as needed
  height: auto; // Maintain aspect ratio
  padding-right:15px;
  padding-left:15px;
  vertical-align: middle;

  @media (max-width: 768px) {
    width: 24px; // Adjust size for smaller screens if necessary
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
//const BackButtonStyled = styled(Button)`
//  && {
//    padding-top: 15px;
//    color: #656565;
//    text-transform: none;
//    font-size: 1rem;
//    font-weight: 600;
//  }
//`;

const RelatedContainer = styled.div`
    width: 100%; // Takes the full width to center the inner content
    max-width: 1000px; // Might bring back
    margin: 0 0;
 /*   padding: 20px;*/
    box-sizing: border-box; // Makes sure padding is included in the width
    text-align: left; // Aligns the text to the left
`;

const ArticlesHeading = styled.h2`
  font-size: 22px; // Set the font size as needed
  color: #000000; // Adjust the color as needed
  font-weight: bold; // If you want the heading to be bold
  margin-top: 20px; // Space above the heading
  text-align: left; 
  font-family: 'Roboto', sans-serif; // Your chosen font family
  padding-left: 5px;
  padding-bottom: 16px;
     @media (max-width: 768px) {
   margin-top: 40px;
  }
`;


const IconDiv = styled.div`
   width: 110px; 

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

//const IconDiv = styled.div`
//   width: 50px; 

//    @media (max-width: 768px) {
//      width: 50px; 
//  }
//`;

//const ImageIcon = styled.img`
//  width: 40px; // Set the width as needed
//  height: auto; // Maintain aspect ratio

//  @media (max-width: 768px) {
//    width: 35px; // Adjust size for smaller screens if necessary
//  }
//`;

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <Button
            startIcon={<span>&lt;</span>}
            onClick={() => navigate('/search')}
            sx={{
                paddingTop: '25px',
                color: '#656565',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
               }}
        >
            Back to Search
        </Button>
    );
};

const FlexContainer = styled.div`
  display: flex;
  align-items: center; // Vertically center the items
 /* justify-content: space-between; // Space out the items*/
  margin-bottom: 20px; // Add some space below the container
`;

const BackgroundStyle = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100%",
    backgroundColor: "#F7F8F7",
}));

const ItemSpace = styled("hr")(({ theme }) => ({
    lineHeight: "1px",
    width: "95%",
    backgroundColor: "#E2E2E2",
    marginTop: "20px",
    marginBottom: "10px",
    border: "none",
    borderTop: "1px solid #E2E2E2",
}))

Modal.setAppElement('#root');

    const RadioOption = ({ option, selectedOption, onOptionChange }) => {
    const isCorrect = selectedOption === option.option && option.isCorrect;
    const isIncorrect = selectedOption === option.option && option.isCorrect === false;
    const isUnknown = selectedOption === option.option && option.isCorrect === null;

    return (
        <div className='option-container'>
            <input
                type="radio"
                name="option"
                value={option.option}
                checked={selectedOption === option.option}
                onChange={() => onOptionChange(option.option)}
            />
            <label>{option.option}</label>
            {isCorrect && <p className="correct-option"><span className="em">Correct!</span> {option.explanation}</p>}
            {isIncorrect && <p className="incorrect-option"><span className="em">Incorrect.</span> {option.explanation}</p>}
            {isUnknown && selectedOption === option.option && <p className="unknown-option">{option.explanation}</p>}
        </div>
    );
};

const Question = ({ question }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setIsAnswered(true);
    };

    return (
        <div>
            <p className="questionText">{question.question}</p>
{/*            <hr style={{ border: 'none', width: '70%', height: '1px', backgroundColor: 'silver', margin: '5px 0 20px 0', borderTop: '1px dashed #86BFFF' }} />*/}
            <BulletBlockWrapper>
                <BulletList>
                    {question.options.map((option, index) => (
                        <RadioOption
                            key={index}
                            option={option}
                            selectedOption={selectedOption}
                            onOptionChange={handleOptionChange}
                        />
                    ))}
                </BulletList>
            </BulletBlockWrapper>
            {/*{isAnswered && <p>You selected: {selectedOption}</p>}*/}
        </div>
    );
};

// Shares component definition

const Shares = ({ article }) => {
    if (!article) {
        return null;
    }

    // Construct the article URL
    const articleUrl = `https://medexplain.org/articles?title=${encodeURIComponent(article.title)}`;

    return (
        <div className='articleshare'>
            Share This Article:&#160; &#160;
            <a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent('Check out this article on MedExplain: ' + articleUrl)}`}>
                <ArticleIcon src={getImageUrl("Mail.png")} alt="email article" /><span class="sharetext">email</span>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer">
                <ArticleIcon src={getImageUrl("Facebook.png")} alt="share on Facebook" /><span class="sharetext">facebook</span>
            </a>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out this article on MedExplain: ' + article.title)}&url=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer">
                <ArticleIcon src={getImageUrl("Twitter.png")} alt="share on Twitter" /><span class="sharetext">twitter/X</span>
            </a>
            &#160; &#160;&#160; &#160;&#160; &#160;&#160; &#160; Print This Article:&#160; &#160;
            <ArticleIcon src={getImageUrl("Print.png")} alt="print this article" onClick={() => window.print()} />
        </div>
    );
};

//const Shares = ({ article }) => {
//    if (!article) {
//        return null;
//    }

//    // Construct the article URL
//    const articleUrl = `https://medexplain.org/articles?title=${encodeURIComponent(article.title)}`;

//    return (
//        <div className='articleshare'>
//            Share This Article:&#160; &#160;
//            <a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent('Check out this article on MedExplain: ' + articleUrl)}`}>
//                <ArticleIcon src={getImageUrl("Mail.png")} alt="email article" /><span class="sharetext">email</span>
//               </a>
//            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer">
//                <ArticleIcon src={getImageUrl("Facebook.png")} alt="share on Facebook" /><span class="sharetext">facebook</span>
//            </a>
//            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out this article on MedExplain: ' + article.title)}&url=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer">
//                <ArticleIcon src={getImageUrl("Twitter.png")} alt="share on Twitter" /><span class="sharetext">twitter/X</span>
//            </a>
//           &#160; &#160;&#160; &#160;&#160; &#160;&#160; &#160; Print This Article:&#160; &#160;
//            <ArticleIcon src={getImageUrl("Print.png")} alt="print this article" onClick={() => window.print()} />
//        </div>
//    );
//};

const Assessment = ({ labelText, questions }) => {
    if (!questions || questions.length === 0) {
        return null;  
    }

    return (
        <div id="WhatYouLearned" className="questions-container">
            <div className="questions-content">
                   <div id="contentAssessments">
                    <ItemSpace />
                    <div className="center-block text-center" id="ImproveMedExBox">
                        <span id="ImproveMedExHeader" className="learned-header">
                            {/*<i id="ImproveMedExIcon" className="fa fa-graduation-cap"></i>*/}
                            <LearnedIcon src={getImageUrl("Lightbulb.png")} alt="lightbulb" />&#160; See what you learned!
                        </span>
                    </div>
                     <div className="questions">
                        {questions.map((question, index) => <Question key={index} question={question} />)}
                    </div>
                    <ItemSpace />
                </div>
            </div>
        </div>
    );
};

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [sanitizedEvidence, setSanitizedEvidence] = useState('');
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [placeholderImage, setPlaceholderImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preloadPlaceholderImage = () => {
            const img = new Image();
            img.onload = () => setPlaceholderImage(img.src);
            img.src = placeholderHeadshot;
        };

        preloadPlaceholderImage();
    }, []);

    //useEffect(() => {
    //    const fetchData = async () => {
            useEffect(() => {
                const fetchData = async () => {
                    try {
                        const queryParams = qs.parse(window.location.search, { ignoreQueryPrefix: true });
                        const title = queryParams.title;
                        const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/articles?title=${title}`);
                        setArticles(result.data);

                        if (result.data.length > 0) {
                            setSanitizedEvidence(DOMPurify.sanitize(result.data[0].evidence_summary));
                            const article = result.data[0];

                            // Update Open Graph meta tags
                            document.getElementById('og-title').setAttribute('content', article.title);
                            document.getElementById('og-description').setAttribute('content', article.description || article.title);
                            document.getElementById('og-image').setAttribute('content', article.image_url || 'default_image_url');
                            document.getElementById('og-url').setAttribute('content', `https://medexplain.org/articles?title=${encodeURIComponent(article.title)}`);
                        }
                        setIsLoading(false);
                    } catch (error) {
                        setIsLoading(false);
                    }
                };

                fetchData();
            }, []);


            //try {
            //    const queryParams = qs.parse(window.location.search, { ignoreQueryPrefix: true });
            //    const title = queryParams.title;
            //    const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/articles?title=${title}`);
            //   /* console.log('API Response:', result.data);*/
            //    setArticles(result.data);

            //    if (result.data.length > 0) {
            //        setSanitizedEvidence(DOMPurify.sanitize(result.data[0].evidence_summary));
            //    }
            //    setIsLoading(false);
            //} catch (error) {
            // /*   console.error('Error fetching articles:', error);*/
            //    setIsLoading(false);
            //}
    /*    };*/

    //    fetchData();
    //}, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!Array.isArray(articles) || articles.length === 0) {
        return <div>No articles found</div>;
    }

    const getAuthorHeadshot = (author) => {
        // Log the whole author object for debugging purposes
      /*  console.log('Author object:', author);*/

        if (author?.headshot_link) {
          /*  console.log('Author has a headshot link:', author.headshot_link);*/
            return author.headshot_link;
        } else {
            /*console.log('Using placeholder headshot');*/
            return placeholderHeadshot; // Ensure this variable is imported or defined in this component
        }
    };

    const renderAuthors = (authors) => {
        // Filter out any null or undefined authors before attempting to render
        const validAuthors = authors.filter(author => author != null);

        return (
            <AuthorsContainer>
                {validAuthors.map((author, index) => (
                    <Author key={index}>
                        <img
                            className="author-image"
                            src={getAuthorHeadshot(author)}
                            alt={`${author?.name || 'Default'} headshot`}
                        />
                        <div className="author-details">
                            {/* Optional chaining ensures that name is accessed safely */}
                            <div className="author-name">
                                {author?.name}
                                {author?.credentials ? `, ${author.credentials}` : ''}
                            </div>
                            {author?.author_title && <div className="author-title">{author.author_title}</div>}
                            {author?.affiliations && <div className="author-affiliations">{author.affiliations}</div>}
                        </div>
                    </Author>
                ))}
            </AuthorsContainer>
        );
    };
    
    return (
        <BackgroundStyle>
            {articles.map((article) => (
                <MainContainer key={article.id}>
                    <TopControlsContainer>
                    <BackButton />
                         </TopControlsContainer>
                    <ArticleContainer>
                 
                {/*        <SideColumn>*/}
                {/*    <BackToResultsLink href="#back">Back to results</BackToResultsLink>*/}
                {/*</SideColumn>*/}
                <ContentContainer>
            {articles.map((article) => (
                <div key={article.id} className='article-container'>
                         <div className='article-content'>
                        <h2 className="title">{article.title}</h2>
                        <FlexContainer>
                            <StyledButton onClick={() => { setModalIsOpen(true); setSelectedArticle(article); }}>
                                <BeakerIcon src={getImageUrl("icons8-beaker.png")} alt="beaker" /> See the Science
                            </StyledButton>
                            <p className='publication-date'>
                                Last Updated {
                                    new Date(article.publication_date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                                }
                            </p>
                        </FlexContainer>
                                   <div className='authors'>
                {renderAuthors(article.authors)}
                        </div>
                        <ItemSpace />
                        <div className="article-content">
                           {/* <hr style={{ border: 'none', width: '70%', height: '1px', backgroundColor: 'silver', margin: '5px 0 20px 0', borderTop: '1px dashed #86BFFF' }} />*/}
                            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.article_body) }} />
                        </div>
                     
            {/* See the Science Button */}
            {/*<StyledButton onClick={() => { setModalIsOpen(true); setSelectedArticle(article); }}>*/}
            {/*    <img src={BeakerIcon} alt="Beaker Icon" /> See the Science*/}
            {/*</StyledButton>*/}
                
                         {/* {article.youtube_url && <div className="youtube-container"><YouTube videoId={new URL(article.youtube_url).searchParams.get("v")} /></div>}*/}

                        <PalsLogoContainer>
                            <img src={PALSLogo} alt='PALS logo' className="pals-logo" />
                            <PalsText>Made in collaboration with the Patient Activated Learning System, a project by Weill Cornell Medical College.</PalsText>
                        </PalsLogoContainer>
                        <div>&#160;</div>
                        <Shares article={article} />
                        <Assessment labelText="some text" questions={article.questions} />
                         <RelatedContainer>
                            <ArticlesHeading>Popular Articles</ArticlesHeading>
                        </RelatedContainer>
                        <RelatedArticlesList>
                            <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill.png")} alt="pill" /></IconDiv><a href="/articles?title=What should I do if I accidentally take an extra dose of amlodipine?">What should I do if I accidentally take an extra dose of amlodipine?</a></ArticleItem>
                            <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill Bottle.png")} alt="pill bottle" /></IconDiv><a href="/articles?title=How long will it take for amlodipine to lower my blood pressure?">How long will it take for amlodipine to lower my blood pressure?</a></ArticleItem>
                            <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill.png")} alt="pill" /></IconDiv><a href="/articles?title=What should I do if I accidentally take an extra dose of hydrochlorothiazide?">What should I do if I accidentally take an extra dose of hydrochlorothiazide  (HCTZ)?</a></ArticleItem>
                            <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill.png")} alt="pill" /></IconDiv><a href="/articles?title=What should I do if I accidentally take an extra dose of beta blocker?">What should I do if I accidentally take an extra dose of beta blocker?</a></ArticleItem>
                            <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill.png")} alt="pill" /></IconDiv><a href="/articles?title=What should I do if I accidentally take an extra dose of carvedilol?">What should I do if I accidentally take an extra dose of carvedilol?</a></ArticleItem>
                            <ArticleItem><IconDiv><ImageIcon src={getImageUrl("Pill.png")} alt="pill" /></IconDiv><a href="/articles?title=What should I do if I accidentally take an extra dose of spironolactone?">What should I do if I accidentally take an extra dose of spironolactone?</a></ArticleItem>
                        </RelatedArticlesList>
                         </div>                                    
            
        </div>
            ))}
                </ContentContainer>
                {/*<RightColumn>*/}
                {/*    <StyledButton onClick={() => { setModalIsOpen(true); setSelectedArticle(article); }}>*/}
                {/*        <img src={BeakerIcon} alt="Beaker Icon" /> See the Science*/}
                {/*    </StyledButton>*/}
                {/*    </RightColumn>*/}
                    </ArticleContainer>
                </MainContainer>
))}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { setModalIsOpen(false); setSelectedArticle(null); }}
                className="evidence-modal"
                style={{
                    overflowY: 'auto',
                    maxHeight: '90%',
                    zIndex: '2000' , // A high value to ensure it's on top
                    position: 'relative' // Ensure the modal has a position context for z-index to work
                }}
            >
                <div className="modal-content">
                    <h2 style={{ color: '#433592', marginBottom: '5px', }}>See the Science</h2>
               {/*      <hr style={{ border: 'none', width: '100%', height: '1px', backgroundColor: 'silver', margin: '5px 5px 20px', borderTop: '1px dashed silver' }} />*/}
                    <div dangerouslySetInnerHTML={{ __html: sanitizedEvidence }} />
                    <p> <br /></p>
                    <p style={{ fontWeight: 'bold' }}>
                        <sup>References</sup>
                    </p>
                    {/* Use selectedArticle to display the evidence summary references */}
                    {selectedArticle && <p ID="esreferences" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedArticle.evidence_summary_references) }} />}
                    <button onClick={() => { setModalIsOpen(false); setSelectedArticle(null); }} className="close-button">&times;</button>
                </div>
            {/*    <p className="modal-copy">&copy; {new Date().getFullYear()} MedExplain, Inc. All rights reserved.</p>*/}
            </Modal>
            {modalIsOpen && <div className="overlay" />}
        </BackgroundStyle>
    );
};

export default ArticleList;