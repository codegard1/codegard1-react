import React, { Component } from 'react';
import './App.css';
import 'animate.css';
import { Page } from './components/Page';
import { Heading, HorizontalBar } from './components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: 'experimental',
      color: 'teal'
    };
  }
  
  _changePage(p) {
    this.setState({
      page: p
    });
  }

  _changeColor(options) {
    this.setState({
      color: options.key
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ms-Grid ms-u-fadeIn400">
          <Heading 
            selectedKey={this.state.page} 
            _changePage={this._changePage.bind(this)} />
          <HorizontalBar 
            color={this.state.color} />
          <Page 
            page={this.state.page}
            color={this.state.color}
            _changeColor={this._changeColor.bind(this)} />
          <HorizontalBar 
            color={this.state.color} />
        </div>
      </div>
    );
  }
}
