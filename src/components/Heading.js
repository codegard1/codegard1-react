import React from "react";
import * as T from "prop-types";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { Route, withRouter } from "react-router-dom";

/* custom stuff */
import BaseComponent from "./BaseComponent";
import * as fabric from "./fabricStyles";
import "./Heading.css";
import { NavDefinition } from "./Page";
import { routes } from "./Page";

class Heading extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = { redirect: false };

    this._bind("onChanged");
  }

  onChanged(option) {
    this.props._changePage(option.key);
    this.props.history.push(`/${option.key}`);
  }

  render() {
    const fontColor = fabric.fontColor;

    /* make NavDefinition more Dropdown-friendly */
    const dropDownOptions = NavDefinition[0].links.map(item => ({
      key: item.key,
      text: item.name
    }));

    return (
      <div className="ms-Grid-row" id="Heading">
        <div className="ms-Grid-col ms-u-sm12">
          <span className={"ms-font-su ms-u-fadeIn400 " + fontColor}>
            <strong>codegard1</strong>
          </span>
        </div>
      </div>
    );
  }
}

Heading.propTypes = {
  selectedKey: T.string.isRequired,
  _changePage: T.func.isRequired
};

export default withRouter(Heading);
