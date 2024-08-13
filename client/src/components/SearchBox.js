import React, { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createConnector } from "react-instantsearch-dom";

// mui
import { InputAdornment } from "@mui/material";

// components
import InputStyle from "./InputStyle";
import Iconify from "./Iconify";

const connectWithQuery = createConnector({
  displayName: "WidgetWithQuery",

  getProvidedProps(props, searchState) {
    const currentRefinement = searchState.attributeForMyQuery || "";

    return { currentRefinement };
  },

  refine(props, searchState, nextRefinement) {
    return {
      ...searchState,
      attributeForMyQuery: nextRefinement,
    };
  },
  getSearchParameters(searchParameters, props, searchState) {
    return searchParameters.setQuery(searchState.attributeForMyQuery || "");
  },

  cleanUp(props, searchState) {
    const { attributeForMyQuery, ...nextSearchState } = searchState;

    return nextSearchState;
  },
});

function SearchBox({ currentRefinement, refine, handleChange }) {
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  const inputRef = useRef(null);

  useEffect(() => {
    if (searchTerm) {
      refine(searchTerm)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  const handleIconClick = () => {
    if (inputRef.current !== '' && inputRef.current !== null) {
      handleChange('')
      navigate(`/search/${inputRef.current}`)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (inputRef.current !== '' && inputRef.current !== null) {
        handleChange('')
        navigate(`/search/${inputRef.current}`)
      }
    }
  }

  return (
    <InputStyle
      value={currentRefinement}
      onChange={(event) => {
        inputRef.current = event.currentTarget.value;

        refine(event.currentTarget.value);
        handleChange(event.currentTarget.value);
      }}
      onKeyDown={handleKeyDown}
          placeholder="e.g. chlorthalidone, high blood pressure, amlodipine"
      InputProps={{
        endAdornment: (
              <InputAdornment position="start" sx={{ width: "80px", minHeight: "40px", background: "#453793", alignItems: "center", justifyContent: 'center', marginRight: '0', cursor: 'pointer' }} onClick={handleIconClick}>  {/*"#1172BA"*/}
            <Iconify
              icon={"eva:search-fill"}
              sx={{ color: "#ffffff", width: 24, height: 24 }}
            />
          </InputAdornment>
        ),
      }}
      sx={{ width: "100%" }}
    />
  );
}

export const CustomSearchBox = connectWithQuery(SearchBox);
