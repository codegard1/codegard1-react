import "./App.css";
import "animate.css";
import "office-ui-fabric-react/dist/css/fabric.min.css";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { initializeIcons } from "@uifabric/icons";
import React from "react";

/* Custom Components */
import "./components/Page.css";
import HorizontalBar from "./components/HorizontalBar";
import BaseComponent from "./components/BaseComponent";
import Table from "./components/blackjack/Table";

/* Initialize Fabric Icons */
initializeIcons();

export default class App extends BaseComponent {
  constructor() {
    super();

    this.state = {
      page: "blackjack",
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
      <Fabric>
        <div className="ms-Grid ms-fadeIn400" id="FirstDiv">
          <HorizontalBar color={this.state.color} />
          <Table />
          <HorizontalBar color={this.state.color} />
        </div>
      </Fabric>
    );
  }
}
