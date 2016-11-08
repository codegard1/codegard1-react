import React, { Component } from 'react';
import './App.css';
//eslint-disable-next-line
import { HorizontalBar, Heading, Heading1 } from './MyComponents';
import Page1 from './PageContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ms-Grid ms-u-fadeIn400">
          <Heading1 />
          <HorizontalBar />
          <Page1 />
          <HorizontalBar />
        </div>
      </div>
    );
  }
}

export default App;
