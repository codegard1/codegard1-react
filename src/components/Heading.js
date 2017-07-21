import React from "react";
import * as T from "prop-types";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

/* custom stuff */
import * as fabric from "./fabricStyles";
import "./Heading.css";

export function Heading(props) {
  const fontColor = fabric.fontColor;

  return (
    <div className="ms-Grid-row" id="Heading">
      <div className="ms-Grid-col ms-u-sm8 ms-u-md9 ms-u-lg12">
        <span className={"ms-font-su ms-u-fadeIn400 " + fontColor}>
          <strong>codegard1</strong>
        </span>
      </div>

      <div className="ms-Grid-col ms-u-sm4 ms-u-md3 ms-u-hiddenLgUp ms-u-fadeIn400">
        <Dropdown
          options={[
            {
            key: "home",
            text: "Home"
          },
          {
            key: "identity",
            text: "Identity"
          },
          {
            key: "projects",
            text: "Projects"
          },
          {
            key: "experiments",
            text: "Experiments"
          }
          ]}
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
