import React from "react";
import * as T from "prop-types";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { Route, withRouter, Link } from "react-router-dom";

/* custom stuff */
import BaseComponent from "./BaseComponent";
import * as fabric from "./fabricStyles";
import "./Heading.css";
import { DropdownDefinition } from "./Page";
// import { routes } from "./Page";

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

    return (
      <div className="ms-Grid-row" id="Heading">
        <div className="ms-Grid-col ms-sm9">
          <span className={"ms-font-su ms-fadeIn400 " + fontColor}>
            <strong>codegard1</strong>
          </span>
        </div>
        <div className="ms-Grid-col ms-sm3">
          <Dropdown
            options={DropdownDefinition}
            selectedKey={this.props.selectedKey}
            onChanged={option => this.onChanged(option)}
            onRenderItem={item => (
              <Link
                style={{
                  display: "block",
                  textDecoration: "none",
                  padding: "0.5em"
                }}
                key={"navItem-" + item.name}
                className="ms-font-m"
                to={`/${item.key}`}
              >
                {item.name}
              </Link>
            )}
          />
        </div>
      </div>
    );
  }
}

Heading.propTypes = {
  selectedKey: T.string.isRequired
};

export default withRouter(Heading);
