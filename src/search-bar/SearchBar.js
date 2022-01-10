import { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { StyledSearchInput, 
        StyledNotFound, 
        StyledSearchBar, 
        StyledSearchBarIcon, 
        StyledClearSearch,
        StyledSearchInputWrapper } from "./styled"
import { useSearchParams, createSearchParams } from "react-router-dom";
import dataSetJson from "../dataset.json"
import SearchResult from "./SearchResult";
import { searchAsync } from "./searchApi"

const START_SEARCH_DELAY = 100;

function SearchComponent() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [result, setResult] = useState([]);
  const queryStr = searchParams.get('q');
  let showSearchResultTimeout = 0;

  useEffect(()=>{
    if(queryStr != null){
      startSearch(queryStr);
    }
  },[]);

  useEffect(()=>{
    if( queryStr != null){
      clearTimeout(showSearchResultTimeout);
      showSearchResultTimeout = setTimeout(()=>{
        startSearch(queryStr);
    }, START_SEARCH_DELAY);
      // startSearch(queryStr);
    }
  },[searchParams]);

  function startSearch(value){
    if(value == ""){
      setResult([]);
    }else{
      searchAsync(value)
        .then(data => setResult(data) )
        .catch(err => console.log(err));
    } 
  }

  

  return (
    <StyledSearchBar>
      <StyledSearchBarIcon>
        <AiOutlineSearch
          size={30}
        />
      </StyledSearchBarIcon>
      <StyledSearchInputWrapper>
        <StyledSearchInput
          onChange={ (e)=> {
            setSearchParams(createSearchParams({q: e.target.value}));
          } }
          value = {queryStr != null ? queryStr : ""}
          placeholder="Search"
        ></StyledSearchInput>
      </StyledSearchInputWrapper>
      {
        queryStr ? 
          <StyledClearSearch 
            onClick={ () => {setSearchParams( createSearchParams("q", "") )} }
        >
          <AiOutlineClose 
            size={25}
          />
        </StyledClearSearch>:
        null
      }
      {
        queryStr  && result.length == 0 ? 
        <StyledNotFound>No result found for query "{searchParams.get('q')}"</StyledNotFound> : 
        <SearchResult  searchResult = { result }></SearchResult>  
      }
    </StyledSearchBar>
  );
}

export default SearchComponent;