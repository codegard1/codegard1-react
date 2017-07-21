import React from "react";
import * as T from "prop-types";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

/* custom stuff */
import * as fabric from "./fabricStyles";
import "./Heading.css";
import { NavDefinition } from "./Page";

export function Heading(props) {
  const fontColor = fabric.fontColor;

  /* make NavDefinition more Dropdown-friendly */
  const dropDownOptions = NavDefinition[0].links.map(item => ({
    key: item.key,
    text: item.name
  }));

  return (
    <div className="ms-Grid-row" id="Heading">
      <div className="ms-Grid-col ms-u-sm8 ms-u-md9 ms-u-lg12">
        <span className={"ms-font-su ms-u-fadeIn400 " + fontColor}>
          <strong>codegard1</strong>
        </span>
      </div>

      <div className="ms-Grid-col ms-u-sm4 ms-u-md3 ms-u-hiddenLgUp ms-u-fadeIn400">
        <Dropdown
          options={dropDownOptions}
          selectedKey={props.selectedKey}
          onChanged={options => props._changePage(options.key)}
        />
      </div>
    </div>
  );
}

Heading.propTypes = {
  selectedKey: T.string.isRequired,
  _changePage: T.func.isRequired
};

export default Heading;
