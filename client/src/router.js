// Routes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeOrig from './pages/home_orig';
import HomeTemp from './pages/hometemp';
import HomeNew from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Articles from './pages/articles';
import CreateArticles from './Admin/CreateArticle';
import CreateAuthor from './Admin/CreateAuthor';
import EditAuthor from './Admin/EditAuthor';
import EditSubcategories from './Admin/EditSubcategory';
import AuthorsList from './Admin/ListAuthors';
import ArticlesList from './Admin/ListArticles';
import ListSubCats from './Admin/ListSubCats';
import Search from './pages/search';
/*import AboutUs from "./pages/Company/AboutUs";*/
/*import AboutUs from "layouts/pages/company/about-us";*/
import EditArticle from './Admin/EditArticle';
/*import SignInMedEx from "./Admin/Authentication/SignIn/MedExSignIn";*/
import AdminLinks from "./Admin/AdminLinks";
import Sponsors from "./components/sponsors";
import HomeSearch from './components/homeSearch';
import CredibilitySection from './components/credibility';
import CreateVideos from "./Admin/CreateVideo";
import VideosList from './Admin/ListVideos';
import EditVideos from './Admin/EditVideo';

import NotFound from './pages/404'; 

const Router = () => {
    return (
        <Routes>
            {/*<Route exact path="/" element={<Home />} />*/}
            <Route exact path="/HomeTest" element={<HomeOrig />} />
            <Route exact path="/" element={<HomeTemp />} />
            <Route path="/About" element={<About />} />  {/*works*/}
            {/* <Route path="/Home2" element={<AboutUs />} />*/}
            <Route path="/Team" element={<Team />} />    {/*works*/}
         {/*   <Route path="/Admin/SignIn" element={<SignInMedEx />} />    */}
            <Route path="/HomeNew" element={<HomeNew />} />
          {/*  <Route path="/Home3" element={<AboutUs />} />*/}
            <Route path="/articles" element={<Articles />} />   {/*works*/}
            <Route path="/Admin/NewArticle" element={<CreateArticles />} />
            <Route path="/Admin/EditArticle" element={<EditArticle />} />
            <Route path="/Admin/NewVideo" element={<CreateVideos />} />
            <Route path="/Admin/NewAuthor" element={<CreateAuthor />} />
            <Route path="/Admin/EditAuthor" element={<EditAuthor />} />
            <Route path="/Admin/EditSubcategory" element={< EditSubcategories />} />
             <Route path="/Admin/ListAuthors" element={<AuthorsList />} />
            <Route path="/Admin/ListSubCategories" element={<ListSubCats />} />
            <Route path="/Admin/ListArticles" element={<ArticlesList />} />
            <Route path="/Admin/ListVideos" element={<VideosList />} />
            <Route path="/Admin/EditVideo" element={<EditVideos />} />
            <Route path="/Admin/AdminLinks" element={<AdminLinks />} />
            <Route path="/search/:searchTerm" element={<Search />} />
            <Route path="/search" element={<Search />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/homesearch" element={<HomeSearch />} />
            <Route path="/credibility" element={<CredibilitySection />} />
            <Route path="*" element={<NotFound />} /> 
        </Routes>
    );
};

export default Router;
