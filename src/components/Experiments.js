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

export const Experiments = props => (
  <Fabric>
    <FormBasic />

    <ColorBox />

    <FabricList
      startIndex={0}
      renderedWindowsAhead={1}
      renderedWindowsBehind={1}
    />

    <CalloutExample
      _onShowMenuClicked={props._onShowMenuClicked}
      _onCalloutDismiss={props._onCalloutDismiss}
      isCalloutVisible={props.isCalloutVisible}
    />

  </Fabric>
);

export default Experiments;
