import React, { Component } from 'react';
import './App.css';
import 'animate.css';
import 'office-ui-fabric-react/dist/css/fabric.min.css';

/* Custom Components */
import { Page } from './components/Page';
import { Heading, HorizontalBar } from './components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      color: 'teal',
      isNavOpen: false,
      isMenuVisible: false,
    };

    this._onIsMenuVisibleChanged = this._onIsMenuVisibleChanged.bind(this);
    this._onLinkClick = this._onLinkClick.bind(this);
    this._onOverlayClicked = this._onOverlayClicked.bind(this);
    this._onNavItemClicked = this._onNavItemClicked.bind(this);
    this._onClosePanel = this._onClosePanel.bind(this);
    this._onShowPanel = this._onShowPanel.bind(this);
    this._changeColor = this._changeColor.bind(this);
    this._changePage = this._changePage.bind(this);
  }

  // App methods
  _onIsMenuVisibleChanged(isMenuVisible) {
    this.setState({ isMenuVisible });
  }

  _onLinkClick() {
    this.setState({ isMenuVisible: false });
  }

  _onOverlayClicked(ev) {
    this.setState({ isNavOpen: false });
  }

  _onNavItemClicked(ev) {
    this.setState({ isNavOpen: false });
  }

  _onClosePanel = () => {
    this.setState({ isNavOpen: false });
  }

  _onShowPanel = () => {
    this.setState({ isNavOpen: true });
  }

  _changePage(p) {
    this.setState({ page: p });
  }

  _changeColor(options) {
    this.setState({ color: options.key });
  }

  /*
  <App> ms-Grid
    <Heading> ms-Grid-row
    <HorizontalBar> ms-Grid-row
    <Page> ms-Grid-row
    <HorizontalBar> ms-Grid-row
  */
  render() {
    return (
      <div id="App">
        <div className="ms-Grid ms-u-fadeIn400">
          <Heading
            selectedKey={this.state.page}
            _changePage={this._changePage}
            isMenuVisible={this.state.isMenuVisible}
            isNavOpen={this.state.isNavOpen}
            closePanel={this._onClosePanel}
            showPanel={this._onShowPanel}
          />
          <HorizontalBar
            color={this.state.color} />
          <Page
            page={'home'}
            color={this.state.color}
            _changeColor={this._changeColor} />
          <Page
            page={'identity'}
            color={this.state.color}
            _changeColor={this._changeColor} />
          <Page
            page={'projects'}
            color={this.state.color}
            _changeColor={this._changeColor} />
          <Page
            page={'experimental'}
            color={this.state.color}
            _changeColor={this._changeColor} />
          <HorizontalBar
            color={this.state.color} />
        </div>
      </div>
    );
  }
}
