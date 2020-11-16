import React, {useEffect, useState} from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import { Navbar } from 'react-bootstrap';

function App() {

  const [renderList, setRenderList] = useState(false);
  const [businesses, setBusinesses] = useState([]);


  function searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      setBusinesses(businesses)
    })
    .then(setRenderList(true))
  }

  function renderBusinessList() {
    if (renderList) {
      return <BusinessList businesses={businesses} />;
    }
  }

  return (
    <div className="App">
      <Navbar expand="lg" variant="dark" bg="primary" className="d-flex justify-content-center align-items-center">
      <Navbar.Brand><h2>Let's Eat</h2></Navbar.Brand>
      </Navbar>
      <SearchBar searchYelp={searchYelp} />
      <section id="businessList">
      {renderBusinessList()}
      </section>
    </div>
  );
}

export default App;

