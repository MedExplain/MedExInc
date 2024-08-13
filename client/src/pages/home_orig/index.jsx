/*home*/
import React, { useEffect } from "react";
import "./index.scss";
import { Grid, CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useSelector, useDispatch } from "react-redux";
import { getPopularData } from "../../store/articles";
import SearchArticles from "../../components/search-articles";
import { Link } from "react-router-dom";

const RootStyle = styled("div")(() => ({
    padding: 20,

    "@media(min-width: 768px)": {
        padding: 40,//affects the main content section in the home page
    },
}));

const Content = styled("div")(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(1.5),
    boxShadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    borderRadius: 6,
    gap: theme.spacing(1),
    cursor: "pointer",

    "&:hover": {
        "& > p": {
            color: "#453793",
        },
    },
}));

const ItemImage = styled("img")(({ theme }) => ({
    width: 90,
    height: 90,
    aspectRatio: "16 / 9",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 4,
}));

const HomeOrig = () => {
    const dispatch = useDispatch();
    const { articles, loading } = useSelector((state) => state.articles);

    useEffect(() => {
        dispatch(getPopularData());
    }, [dispatch]);

    return (
        <RootStyle>
            <div>
                <SearchArticles />
                <h2 style={{ color: "#433592", paddingTop: "70px", fontSize: "22px" }}>Popular Articles</h2>
                {loading ? (
                    <CircularProgress />
                ) : (
                    articles && (
                        <Grid container spacing={1.5}>
                            {articles.map((article, i) => (
                                <Grid key={i} item xs={12} md={6} lg={4}>
                                    <Link to={`${article.permalink}`}>
                                        {/* <Link to={`/articles/${article.temp_number}`}>*/}
                                        <Content>
                                            <ItemImage alt="..." src={article.image} />
                                            <Typography
                                                variant="body2"
                                                sx={{ fontSize: 16, fontWeight: 600, color: "#9fbcdc" }}
                                            >
                                                {article.post_title}
                                            </Typography>
                                        </Content>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    )
                )}


            </div>
        </RootStyle>
    );
};

export default HomeOrig;
///*home*/
//import React, { useEffect } from "react";
//import "./index.scss";
//import { Grid, CircularProgress, Typography } from "@mui/material";
//import { styled } from "@mui/material/styles";

//import { useSelector, useDispatch } from "react-redux";
//import { getPopularData } from "../../store/articles";
//import SearchArticles from "../../components/search-articles";
//import { Link } from "react-router-dom";

//const RootStyle = styled("div")(() => ({
//    padding: 20,

//    "@media(min-width: 768px)": {
//        padding: 40,//affects the main content section in the home page
//    },
//}));

//const Content = styled("div")(({ theme }) => ({
//    display: "flex",
//    padding: theme.spacing(1.5),
//    boxShadow:
//        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
//    borderRadius: 6,
//    gap: theme.spacing(1),
//    cursor: "pointer",

//    "&:hover": {
//        "& > p": {
//            color: "#453793",
//        },
//    },
//}));
//const Credibility = styled(Typography)(({ theme }) => ({
//    padding: "0px 0px 0px 0px",
//    textAlign: "left",
//    color: "#433592",
//    fontFamily: "Roboto, Helvetica, Arial, sans - serif",
//    fontSize: "24px",
//    fontWeight: 600,
//    lineHeight: 1.625,
//    letterSpacing: "0.00938em",
//    '@media (max-width:768px)': {
//        fontSize: '1.3rem',
//    },

//}))
//    ;

//const ItemImage = styled("img")(({ theme }) => ({
//    width: 90,
//    height: 90,
//    aspectRatio: "16 / 9",
//    objectFit: "cover",
//    objectPosition: "center",
//    borderRadius: 4,
//}));

//const Home = () => {
//    const dispatch = useDispatch();
//    const { articles, loading } = useSelector((state) => state.articles);

//    useEffect(() => {
//        dispatch(getPopularData());
//         }, [dispatch]);

//    return (
//        <RootStyle>
//                     <SearchArticles />
//                                 <div style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '6%' }}>
//                    {/* Left Column Content */}
//                <div className="left-column">
//                    <div style={{ position: 'absolute', top: '40px', left: '100%', height: '95%', borderLeft: '1px solid #000', marginLeft: '20px' }}></div>
//                    <div style={{ paddingBottom: '20px', }}>
//                        <Credibility>We ensure our articles are credible and reliable.</Credibility>
//                        <div style={{ fontSize: '0.875rem', textAlign: "left", color: "#6c7a89" }}>MedExplain content is created by healthcare professionals using the latest data and findings available. We have a rigorous review process, including several rounds of evaluation by both medical content writers as well as other healthcare professionals to ensure accuracy. You can see who created the content on each article page as well as their credentials and affiliations.</div>
//                        {/*  <hr style={{ border: 'none', width: '80%',  height: '1px', backgroundColor: 'silver', margin: '16px auto 0px', borderTop: '1px dashed #86BFFF',  }} />*/}
//                    </div>

//                    </div>
//                    {/* Right Column - Popular Articles */}
//                <div style={{ flex: 1, flexBasis: '66%', paddingTop: "40px", }}>
//                <h2 style={{ color: "#433592", fontSize:"22px" }}>Popular Articles</h2>
//                {loading ? (
//                    <CircularProgress />
//                ) : (
//                    articles && (
//                        <Grid container spacing={1.5}>
//                            {articles.map((article, i) => (
//                                <Grid key={i} item xs={12} md={6} lg={4}>
//                                    <Link to={`${article.permalink}`}>
//                                   {/* <Link to={`/articles/${article.temp_number}`}>*/}
//                                        <Content>
//                                            <ItemImage alt="..." src={article.image} />
//                                            <Typography
//                                                variant="body2"
//                                                sx={{ fontSize: 14, fontWeight: 600, color: "#9fbcdc" }}
//                                            >
//                                                {article.post_title}
//                                            </Typography>
//                                        </Content>
//                                    </Link>
//                                </Grid>
//                            ))}
//                        </Grid>
//                    )
//                        )}
//                </div>

//                </div>


//                </RootStyle>

//    );
//};

//export default Home;
