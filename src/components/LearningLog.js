import React from "react";
import {FocusZone, FocusZoneDirection} from "office-ui-fabric-react/lib/FocusZone";
import {TextField} from "office-ui-fabric-react/lib/TextField";
import {List} from "office-ui-fabric-react/lib/List";

/* custom stuff */
import BaseComponent from "./BaseComponent";
import {learningLog2016} from "./learningLog2016";
import "./learninglog.css";

/* todo: this should be an import */
const sqlite3 = require('sqlite3').verbose();

export class LearningLog extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      items: []
    };

    /* bind private methods */
    this._bind("_onFilterChanged", "_onRenderCell");
  }

  componentWillMount() {
    /* array to be passed to Fabric */
    let itemsForState = [];

    /* connect to the database */
    var db = new sqlite3.Database(":memory:");

    /* create the db */
    db.run("CREATE TABLE learninglog (key INTEGER, date TEXT, work BLOB, notes BLOB)", [], function (err) {
      console.log(err || 'database created');
    });

    /* prepare the statement */
    var stmt = db.prepare("insert into learninglog (key,date,work) values (?,?,?)");

    /* Run the statement once for each item in the array */
    learningLog2016.forEach(function (item, index) {
      stmt.run(index, item.date, item.work.toString());
    });

    /* display the results */
    db.each("select * from learninglog", [], function (err, row) {
      console.log(err || [row.key, row.date, row.work]);
    });

    /* add the results to the output array */
    db.each("select * from learninglog", [], function (err, row) {
      if (!err) {
        itemsForState.push({
          key: row.key,
          date: row.date,
          work: [row.work],
        });
      } else {
        console.log(err);
      }
    });

    /* finalize the statement */
    stmt.finalize();

    /* destroy the database */
    db.close();

    /* Prepare the learningLog2016 array for passing to FabricList */
    const itemsArray = itemsForState.map(item => {
      let key = item.key;
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

      return {key: `learningLog-${key}`, date, work: workReact, notes: notesReact};
    });
    
    this.setState({ items: itemsArray });
}

// called when the filter text changes
_onFilterChanged(text) {
  const items = text
    ? this
      .state
      .items
      .filter(item => item.date.toLowerCase().indexOf(text.toLowerCase()) >= 0)
    : this.state.items;

  this.setState({filterText: text, items});
}

_onRenderCell(item, index) {
  return (
    <div className="itemCell" data-is-focusable={true}>

      <div className="itemContent">
        <div>
          <span className="itemName ms-font-xl">{item.date}</span>
          <span className="itemIndex ms-font-xs">{`#${index}`}</span>
        </div>
        <div className="itemDesc ms-font-s">

          <p>
            <i className="ms-Icon ms-Icon--QuickNote"/>
            &nbsp; Work
          </p>

          <ul>
            {item.work.length > 0
              ? item.work
              : "None"}
          </ul>

          <p className="ms-font-s">
            <i className="ms-Icon ms-Icon--QuickNote"/>
            &nbsp; Notes
          </p>

          <ul>
            {item.notes.length > 0
              ? item.notes
              : "None"}
          </ul>
        </div>
      </div>
    </div>
  );
}

render() {
  let originalItems = this.itemsArray;
  let items = this.state.items;
  let resultCountText = items.length === originalItems.length
    ? ""
    : ` (${items.length} of ${originalItems.length} shown)`;

  return (
    <div id="learning-log">
      <p className="ms-font-su">Learning Log</p>
      <FocusZone direction={FocusZoneDirection.vertical}>
        <TextField
          label={`Filter by Date` + resultCountText}
          onBeforeChange={this._onFilterChanged}/>
        <List
          items={items}
          onRenderCell={this._onRenderCell}
          startIndex={0}
          renderedWindowsAhead={1}
          renderedWindowsBehind={1}/>
      </FocusZone>
    </div>
  );
}
}

export default LearningLog;
