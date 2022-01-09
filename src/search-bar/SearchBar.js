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

function SearchComponent() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [dataSet, setDataSet] = useState(dataSetJson);
  let [result, setResult] = useState([]);
  const queryStr = searchParams.get('q');

  useEffect(()=>{
    if(queryStr != null){
      startSearch(queryStr);
    }
  },[]);

  useEffect(()=>{
    if( queryStr != null){
      startSearch(queryStr);
    }
  },[searchParams]);

  function startSearch(value){
    if(value == ""){
      setResult([]);
    }else{
      // console.log("startSearch:", value);
      let matchCounter = 0;
      const searchResult = dataSet.filter( (v, i) => {
          let match =  v.toLowerCase().includes(value.toLowerCase());

          if(matchCounter > 10){
            return false;
          }
          if(match){
            matchCounter++;
            return true;
          }else{
            return false;
          }
          
      })
      setResult(searchResult);
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
        queryStr != null &&   queryStr != "" && result.length == 0 ? 
        <StyledNotFound>No result found for query "{searchParams.get('q')}"</StyledNotFound> : 
        <SearchResult  searchResult = { result }></SearchResult>  
      }
    </StyledSearchBar>
  );
}

export default SearchComponent;