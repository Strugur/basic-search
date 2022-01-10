import logo from './logo.svg';
import './App.css';
import SearchBar from './search-bar/SearchBar';
import {  BrowserRouter as  Router} from 'react-router-dom';
import styled from '@emotion/styled';
import { HEADER_HEIGHT } from "./common/styled"

const Header = styled.header(() =>({
  display: "flex",
  height: HEADER_HEIGHT,
  flexDirection: "column",
  alignItems: "center",
  padding: "5px",
  backgroundColor:"#282c34"
}));

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <SearchBar></SearchBar>
        </Header>
      </div>
    </Router>
  );
}

export default App;
