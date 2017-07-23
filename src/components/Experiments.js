import React from "react";
// import * as T from "prop-types";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

/* custom stuff */
import {
  FormBasic,
  CalloutExample,
  ColorBox,
  FabricList
} from "./experiments/";
import "./experiments.css";

export const Experiments = props => (
  <Fabric>
    <FormBasic />

    <ColorBox />

    <FabricList
      startIndex={0}
      renderedWindowsAhead={1}
      renderedWindowsBehind={1}
    />

    <CalloutExample />

  </Fabric>
);

export default Experiments;
