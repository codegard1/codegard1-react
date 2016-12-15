import React, { Component } from 'react';
import './App.css';
import { Page } from './components/Page';
import { Heading, HorizontalBar } from './components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'home' };
  }
  
  changePage(p) {
    this.setState({
      page: p
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ms-Grid ms-u-fadeIn400">
          <Heading selectedKey={this.state.page} changePage={this.changePage.bind(this)} />
          <HorizontalBar />
          <Page page={this.state.page} />
          <HorizontalBar />
        </div>
      </div>
    );
  }
}
