import React from "react";
import * as T from "prop-types";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { CommandButton } from "office-ui-fabric-react/lib/Button";
import { withRouter } from "react-router-dom";

/* custom stuff */
import BaseComponent from "./BaseComponent";
import * as fabric from "./fabricStyles";
import "./Heading.css";
import { NavDefinition } from "./Page";
// import { routes } from "./Page";

class Heading extends BaseComponent {
  constructor(props) {
    super(props);

    this._bind("onChanged");
  }

  onChanged(option) {
    console.log("option:", option.key);
    this.props.onChange(option);
    this.context.router.history.push(`/${option.key}`);
  }

  render() {
    /* make NavDefinition more Dropdown-friendly */
    const DropdownDefinition = NavDefinition[0].links.map(function(item) {
      return {
        ariaLabel: item.name,
        category: item.category,
        disabled: false,
        iconProps: item.iconProps,
        key: item.key,
        name: item.name,
        text: item.name
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
            options={DropdownDefinition}
            selectedKey={this.props.selectedKey}
            label="Pages"
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
