import React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { List } from "office-ui-fabric-react/lib/List";

/* custom stuff */
import BaseComponent from "./BaseComponent";
import { learningLog2016 } from "./learningLog2016";
import "./learninglog.css";

export class LearningLog extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      items: []
    };

    /* bind private methods */
    this._bind("_onFilterChanged", "_onRenderCell");

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

  _onRenderCell(item, index) {
    return (
      <div className="ms-Grid itemCell" data-is-focusable={true}>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm3">
            <span className="itemName ms-font-xl">{item.date}</span>
            <span className="itemIndex ms-font-xs">{`#${index}`}</span>
          </div>

          <div className="ms-Grid-col ms-sm5">
            <p className="ms-font-s">
              <i className="ms-Icon ms-Icon--QuickNote" /> &nbsp; Work
            </p>
            <ul className="ms-font-s">
              {item.work.length > 0 ? item.work : "None"}
            </ul>
          </div>

          <div className="ms-Grid-col ms-sm4">
            <p className="ms-font-s">
              <i className="ms-Icon ms-Icon--QuickNote" /> &nbsp; Notes
            </p>
            <ul>{item.notes.length > 0 ? item.notes : "None"}</ul>
          </div>
        </div>
      </div>
    );
  }

  render() {
    /* List filtering */
    let originalItems = this.itemsArray;
    let items = this.state.items;
    let resultCountText =
      items.length === originalItems.length
        ? ""
        : ` (${items.length} of ${originalItems.length} shown)`;

    return (
      <div id="learning-log">
        <p className="ms-font-su">Learning Log</p>
        <p>
          This is a list of things I've read and done that are code-related.
        </p>

        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm3">
              <TextField
                label={`Filter by Date` + resultCountText}
                onBeforeChange={this._onFilterChanged}
              />
            </div>
          </div>
        </div>

        <List
          items={items}
          onRenderCell={this._onRenderCell}
          startIndex={0}
          renderedWindowsAhead={1}
          renderedWindowsBehind={1}
        />
      </div>
    );
  }
}

export default LearningLog;
