import React from "react";
import {
  FocusZone,
  FocusZoneDirection
} from "office-ui-fabric-react/lib/FocusZone";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { List } from "office-ui-fabric-react/lib/List";

/* custom stuff */
import { BaseComponent } from "../BaseComponent";
import { learningLog2016 } from "./learningLog2016";
let divStyles = {
  borderTop: "1px solid #eee",
  overflowX: "hidden",
  overflowY: "auto",
  maxHeight: "600px",
  padding: "20px 0"
};

export class FabricList extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      items: []
    };

    /* bind private methods */
    this._bind("_onFilterChanged");

    /* Prepare the learningLog2016 array for passing to FabricList */
    this.itemsArray = learningLog2016.map(item => {
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
  }

  componentWillMount() {
    this.setState({ items: this.itemsArray });
  }

  // called when the filter text changes
  _onFilterChanged(text) {
    const items = text
      ? this.state.items.filter(
          item => item.date.toLowerCase().indexOf(text.toLowerCase()) >= 0
        )
      : this.state.items;

    this.setState({
      filterText: text,
      items
    });
  }

  render() {
    let originalItems = this.itemsArray;
    let items  = this.state.items;
    let resultCountText = items.length === originalItems.length
      ? ""
      : ` (${items.length} of ${originalItems.length} shown)`;

    return (
      <div style={divStyles}>
        <p className="ms-font-xl">Learning Log</p>
        <FocusZone direction={FocusZoneDirection.vertical}>
          <TextField
            label={`Filter by Date` + resultCountText}
            onBeforeChange={this._onFilterChanged}
          />
          <List
            items={items}
            onRenderCell={(item, index) => (
              <div className="fabricList-itemCell" data-is-focusable={true}>

                <div className="fabricList-itemContent">
                  <div className="fabricList-itemName ms-font-xl">
                    {item.date}
                  </div>
                  <div className="fabricList-itemIndex ms-font-xs">
                    <p>{`Item ${index}`}</p>
                  </div>
                  <div className="fabricList-itemDesc ms-font-xs">
                    <p className="ms-font-s">
                      <i className="ms-Icon ms-Icon--QuickNote" />Work
                    </p>
                    <br />
                    <ul>
                      {item.work.length > 0 ? item.work : "None"}
                    </ul>
                  </div>
                  <div className="fabricList-itemDesc ms-font-xs">
                    <p className="ms-font-s">
                      <i className="ms-Icon ms-Icon--QuickNote" />Notes
                    </p>
                    <br />
                    <ul>
                      {item.notes.length > 0 ? item.notes : "None"}
                    </ul>

                  </div>
                </div>
                <i
                  className={
                    "ms-fontColor-themePrimary ms-Icon ms-Icon--chevronRight"
                  }
                />
              </div>
            )}
          />
        </FocusZone>
      </div>
    );
  }
}

export default FabricList;
