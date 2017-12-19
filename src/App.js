import "./App.css";
import "animate.css";
import "office-ui-fabric-react/dist/css/fabric.min.css";
import { HashRouter } from "react-router-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { initializeIcons } from "@uifabric/icons";
import React from "react";

/* Custom Components */
import Heading from "./components/Heading";
import HorizontalBar from "./components/HorizontalBar";
import Page from "./components/Page";
import BaseComponent from "./components/BaseComponent";
// import LearningLog from "./components/LearningLog";

/* Initialize Fabric Icons */
initializeIcons();

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
    this._bind("_onClosePanel", "_onShowPanel", "_onNavLinkClicked");
  }

  _onClosePanel = () => {
    this.setState({ isNavOpen: false });
  };

  _onShowPanel = () => {
    this.setState({ isNavOpen: true });
  };

  _onNavLinkClicked(item) {
    this.setState({ page: item.key });
  }

  render() {
    return (
      <HashRouter>
        <Fabric id="App">
          <div className="ms-Grid ms-fadeIn400" id="FirstDiv">
            <Heading
              selectedKey={this.state.page}
              onChange={this._onNavLinkClicked}
            />
            <HorizontalBar color={this.state.color} />
            <Page
              page={this.state.page}
              onNavLinkClicked={this._onNavLinkClicked}
            />
            <HorizontalBar color={this.state.color} />
          </div>
          {/* <span className="ms-font-su">{this.props.history.location.url}</span> */}
        </Fabric>
      </HashRouter>
    );
  }
}
