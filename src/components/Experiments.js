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
import { learningLog2016 } from "./experiments/learningLog2016";

/* Prepare the learningLog2016 array for passing to FabricList */
const itemsArray = learningLog2016.map(item => {
  let key = item.key || Math.round(Math.random() * 10000);
  let date = item.date || "no date";
  let work = item.work || [];
  let notes = item.notes || [];
  let workReact = [];
  let notesReact = [];

  if (work.length > 0) {
    workReact = work.map((item, index) => (
      <li key={`${date}-work-${index}`}>{item}</li>
    ));
  }
  if (notes.length > 0) {
    notesReact = notes.map((item, index) => (
      <li key={`${date}-note-${index}`}>{item}</li>
    ));
  }

  return {
    key: `learningLog-${key}`,
    date,
    work: workReact,
    notes: notesReact
  };
});

export const Experiments = props => (
  <Fabric>
    <FormBasic />
    <ColorBox color={props.color} _changeColor={props._changeColor} />

    <FabricList
      color={props.color}
      items={itemsArray}
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
