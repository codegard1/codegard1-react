import React from "react";
import * as T from "prop-types";

/* custom stuff */
import { fabricColor } from "./fabricStyles";

export function HorizontalBar(props) {
  let bgColor = fabricColor("bg", "teal");

  return (
    <div className={"ms-Grid-row " + bgColor}>
      <div className="ms-Grid-col ms-sm12">&nbsp;</div>
    </div>
  );
}

HorizontalBar.propTypes = {
  color: T.string.isRequired
};

export default HorizontalBar;
