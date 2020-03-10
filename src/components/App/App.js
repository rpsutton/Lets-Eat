import React, { Component } from 'react';
import './App.css';
import BusinessList from "/Users/paulsutton/Library/Mobile Documents/com~apple~CloudDocs/Projects/reactAppTest/ravenous/src/components/BusinessList/BusinessList.js";
import SearchBar from "/Users/paulsutton/Library/Mobile Documents/com~apple~CloudDocs/Projects/reactAppTest/ravenous/src/components/SearchBar/SearchBar.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Let's Eat</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}
export default App;
