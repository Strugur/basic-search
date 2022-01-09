import styled from "@emotion/styled";

export const StyledSearchBar = styled.div(() =>({
    position: "relative",
    display:"flex",
    justifyContent: "center",
    height: "60px",
    width: "250px",
    backgroundColor: "#f1f1f1",
    margin: "5px",
    border: "1px solid black",
    borderRadius: "5px",
  }));

export const StyledSearchBarIcon = styled.div(() =>({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
  }));

export const StyledSearchInputWrapper = styled.div(() =>({
    display: "flex",
    flex: 1,
    justifyContent: "center",
    padding: "5px",
  }));
export const StyledSearchInput = styled.input(() =>({
    width: "100%",
    backgroundColor: "#f1f1f1",
    fontSize: "15px",
    outline: "none",
    border: "none",
  }));

  
export const StyledClearSearch = styled.div(({ display }) =>({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    cursor: "pointer"
  }));



export const StyledSearchResult = styled.div(() =>({
  position: "absolute",
  top: "70px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledNotFound = styled.div(() =>({
  position: "absolute",
  top: "70px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: "5px",
  maxWidth: "250px",
  overflow: "hidden"
  
}));
  
export const StyledSearchResultItem = styled.div(() =>({
    display: "flex",
    justifyContent: "start",
    backgroundColor: "#D3D3D3",
    width: "240px",
    border: "1px solid black",
    padding: "5px",
  }));