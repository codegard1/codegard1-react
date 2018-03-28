import React from "react";
import * as T from "prop-types";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { CommandButton } from "office-ui-fabric-react/lib/Button";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { withRouter } from "react-router-dom";

/* custom stuff */
import BaseComponent from "./BaseComponent";
import * as fabric from "./fabricStyles";
import "./Heading.css";
import { NavDefinition } from "./pageContent";

class Heading extends BaseComponent {
  constructor(props) {
    super(props);

    this._bind("onChanged", "_onRenderOption", "_onRenderPlaceHolder");
  }

  onChanged(option) {
    console.log("option:", option.key);
    this.props.onChange(option);
    this.context.router.history.push(`/${option.key}`);
  }

  _onRenderOption(option) {
    return (
      <div>
        {option.icon && (
          <Icon
            style={{ marginRight: "8px" }}
            iconName={option.icon}
            aria-hidden="true"
            title={option.icon}
          />
        )}
        <span>{option.text}</span>
      </div>
    );
  }

  _onRenderPlaceHolder(props) {
    return (
      <div>
        <Icon
          style={{ marginRight: "8px" }}
          iconName={"MessageFill"}
          aria-hidden="true"
        />
        <span>{props}</span>
      </div>
    );
  }

  render() {
    /* make NavDefinition more Dropdown-friendly */
    const DropdownDefinition = NavDefinition[0].links.map(item => {
      return {
        ariaLabel: item.name,
        key: item.key,
        text: item.name,
        icon: item.iconProps.iconName
      };
    });

    return (
      <div className="ms-Grid-row" id="Heading">
        <div className="ms-Grid-col ms-sm9">
          <span className={"ms-font-su ms-fadeIn400 " + fabric.fontColor}>
            <strong>codegard1</strong>
          </span>
        </div>
        <div className="ms-Grid-col ms-sm3">
          <Dropdown
            onChanged={option => this.onChanged(option)}
            onRenderOption={this._onRenderOption}
            onRenderPlaceHolder={this._onRenderPlaceHolder}
            options={DropdownDefinition}
            placeHolder="Select a page"
            selectedKey={this.props.selectedKey}
          />
        </div>
      </div>
    );
  }
}

Heading.propTypes = {
  selectedKey: T.string.isRequired,
  onChange: T.func
};

Heading.contextTypes = {
  router: T.object.isRequired
};

export default withRouter(Heading);
