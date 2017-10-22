import React from "react";
import "./App.css";
import "animate.css";
import "office-ui-fabric-react/dist/css/fabric.min.css";

/* Custom Components */
import Heading from "./components/Heading";
import HorizontalBar from "./components/HorizontalBar";
import Page from "./components/Page";
import BaseComponent from "./components/BaseComponent";
// import LearningLog from "./components/LearningLog";

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

  render() {
    return (
      <div id="App">
        <div className="ms-Grid ms-u-fadeIn400" id="FirstDiv">
          <Heading
            selectedKey={this.state.page}
            _changePage={this._changePage}
          />
          <HorizontalBar color={this.state.color} />
          <Page />
          <HorizontalBar color={this.state.color} />
        </div>
      </div>
    );
  }
}
