import React from "react";
import "./App.css";
import "animate.css";
import "office-ui-fabric-react/dist/css/fabric.min.css";

/* Custom Components */
import { BaseComponent, Page, Heading, HorizontalBar } from "./components";

export default class App extends BaseComponent {
  constructor() {
    super();

    this.state = {
      page: "home",
      selectedNavItem: "home",
      color: "teal",
      isNavOpen: false,
      isMenuVisible: false,
      isCalloutVisible: false
    };

    /* bind private methods */
    this._bind(
      "_onClosePanel",
      "_onShowPanel",
      "_changeColor",
      "_changePage",
      "_onNavLinkClicked",
      "_onShowMenuClicked",
      "_onCalloutDismiss"
    );
  }

  _onClosePanel = () => {
    this.setState({ isNavOpen: false });
  };

  _onShowPanel = () => {
    this.setState({ isNavOpen: true });
  };

  _changePage(p) {
    this.setState({ page: p });
  }

  _onNavLinkClicked(ev, item) {
    this.setState({ page: item.key });
  }

  _changeColor(options) {
    this.setState({ color: options.key });
  }

  _onShowMenuClicked() {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  }

  _onCalloutDismiss() {
    this.setState({
      isCalloutVisible: false
    });
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
          <HorizontalBar color={this.state.color} />
          <Page
            page={this.state.page}
            color={this.state.color}
            _changeColor={this._changeColor}
            _onNavLinkClicked={this._onNavLinkClicked}
            selectedNavItem={this.state.page}
            _onShowMenuClicked={this._onShowMenuClicked}
            _onCalloutDismiss={this._onCalloutDismiss}
            isCalloutVisible={this.state.isCalloutVisible}
          />
          <HorizontalBar color={this.state.color} />
        </div>
      </div>
    );
  }
}
