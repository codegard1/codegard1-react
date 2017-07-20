import React from "react";
import * as T from "prop-types";

/* custom stuff */
import { fabricColor } from "./fabricStyles";
import "./Topping.css";

export function Topping(props) {
  /**
   * @todo pass in bgColor and fontColor as props
   */
  const bgColor = fabricColor("bg", "tealLight");
  const fontColor = fabricColor("font", "tealDark");

  return (
    <div className={"ms-Grid-col ms-u-sm12 topping " + bgColor}>
      <span className={"ms-font-xxl " + fontColor}>
        {props.title} &nbsp;
        <i className={"ms-Icon ms-Icon--" + props.icon} />
      </span>
    </div>
  );
}

Topping.propTypes = {
  icon: T.string.isRequired,
  title: T.string.isRequired
};

export default Topping;
