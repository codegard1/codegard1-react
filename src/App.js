import React, { Component } from 'react';
import './App.css';
//eslint-disable-next-line
import { HorizontalBar, Heading, Heading1 } from './MyComponents';
import Page1 from './PageContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'home' }
  }

  changePage(o) {
    //alert(JSON.stringify(o.key))
    this.replaceState({
      page: o.key
    });
  }

  render() {
    var page = this.state.page;
    return (
      <div className="App">
        <div className="ms-Grid ms-u-fadeIn400">
          <Heading1 selectedKey={page} changePage={this.changePage} />
          <HorizontalBar />
          <Page1 page={page} />
          <HorizontalBar />
        </div>
      </div>
    );
  }
}

export default App;
