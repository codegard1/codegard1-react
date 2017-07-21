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
      color: "teal",
      isNavOpen: false,
      isMenuVisible: false,
      isCalloutVisible: false
    };

    /* bind private methods */
    this._bind(
      "_onClosePanel",
      "_onShowPanel",
      "_changePage",
      "_onNavLinkClicked"
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
          />
          <HorizontalBar color={this.state.color} />
          <Page
            page={this.state.page}
            _onNavLinkClicked={this._onNavLinkClicked}
          />
          <HorizontalBar color={this.state.color} />
        </div>
      </div>
    );
  }
}
