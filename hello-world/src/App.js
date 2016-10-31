import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { Link } from 'office-ui-fabric-react/lib/Link';
//import { Callout } from 'office-ui-fabric-react/lib/Callout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>This is a button</Button>
        <br />
        <Link href="#">This is a link</Link>
      </div>
    );
  }
}

export default App;
