import React from "react";
// import * as T from "prop-types";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

/* custom stuff */
import "./experiments.css";
import { FormBasic, CalloutExample, ColorBox } from "./experiments/";

export const Experiments = props => (
  <Fabric>
    <FormBasic />

    <CalloutExample />

    <ColorBox />
  </Fabric>
);

export default Experiments;
