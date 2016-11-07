import React, { Component } from 'react';
import './App.css';
import { HorizontalBar, Heading } from './MyComponents';
import Page1 from './PageContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ms-Grid">
          <Heading />
          <HorizontalBar />
          <Page1 />
          <HorizontalBar />
        </div>
      </div>
    );
  }
}

export default App;
