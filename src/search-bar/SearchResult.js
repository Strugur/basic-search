import { useState, useContext } from "react";
import { StyledSearchResult, StyledSearchResultItem } from "./styled"

function SearchResult( {searchResult} ) {
    return (
      <StyledSearchResult>
          {searchResult.map((v, i)=>{
            return <StyledSearchResultItem key={i}>{v}</StyledSearchResultItem>;  
          })}
      </StyledSearchResult>
    );
  }
  
  export default SearchResult;