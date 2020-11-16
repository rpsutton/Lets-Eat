import React, {useState} from 'react';
import './SearchBar.css';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Link } from "react-scroll";
import Spinner from "react-bootstrap/Spinner";

function SearchBar(props) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState('best_match');

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSearch(event) {
    if (term === "" || location === "") {
      alert("Please make sure both fields are filled out");
    }
    else {
      props.searchYelp(term, location, sortBy);
    }

    event.preventDefault();
  }

    return (
      <div className="d-flex justify-content-center align-items-center flex-column SearchBar">
      <div className="SearchBar-fields">
        <Form.Control placeholder="Search a Business, Food, or Category" onChange={handleTermChange}/>
        <Form.Control placeholder="Where?" onChange={handleLocationChange}/>
      </div>
      <div className="SearchBar-submit">
        <Form>
        <Form.Row className="align-items-center">
          <Col xs="auto" className="my-1">
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
              onChange={handleSortByChange}
            >
              <option value="best_match">Best Match</option>
              <option value="rating">Best Rating</option>
              <option value="review_count">Most Reviews</option>
            </Form.Control>
          </Col>
          <Col xs="auto" className="my-1">
          <Link 
          to="businessList"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          delay={1000}
          >
          <Button onClick={handleSearch}>Search</Button>
          </Link>
          </Col>
        </Form.Row>
      </Form>
      </div>
    </div>
    );
  }

export default SearchBar;