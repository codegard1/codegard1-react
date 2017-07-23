import React from "react";
// import * as T from "prop-types";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

/* custom stuff */
import {
  FormBasic,
  CalloutExample,
  ColorBox,
  LearningLog
} from "./experiments/";
import "./experiments.css";

export const Experiments = props => (
  <Fabric>
    <FormBasic />

    <LearningLog />

    <CalloutExample />

    <ColorBox />
  </Fabric>
);

export default Experiments;
