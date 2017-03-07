import React, { Component } from 'react';
import { Topping } from '../';
import { FormBasic } from '../experiments/FormBasic';
import { CalloutExample } from '../experiments/CalloutExample';
import { ColorBox } from '../experiments/ColorBox';
import { FabricList } from '../experiments/FabricList';
import * as fabric from '../fabricStyles';
import { learningLog2016 } from '../experiments/learningLog2016';

// Prepare the learningLog2016 array for passing to <FabricList>
let itemsArray = learningLog2016.map(function (item) {
    let key = item.key || Math.round(Math.random() * 10000);
    let date = item.date || 'no date';
    let work = item.work || [];
    let notes = item.notes || [];
    let workReact = [];
    let notesReact = [];

    if (work.length > 0) {
        workReact = work.map((item, index) => React.createElement('li', { key: (date + "-work-" + index) }, item));
    }
    if (notes.length > 0) {
        notesReact = notes.map((item, index) => React.createElement('li', { key: (date + "-note-" + index) }, item));
    }

    return { 'date': date, 'work': workReact, 'notes': notesReact, 'key': ("learningLog-" + key) };
});

export class Experimental extends Component {
    render() {
        let leftCol = fabric.left;
        let innerCol = fabric.inner;
        let rightCol = fabric.right;

        return (
            <div className="ms-u-slideRightIn40 ms-Grid-row">
                <Topping title="Experimental" icon="Puzzle" />
                <div className={leftCol}></div>

                <div className={innerCol}>

                    <FormBasic />

                    <CalloutExample
                        _onShowMenuClicked={this.props._onShowMenuClicked}
                        _onCalloutDismiss={this.props._onCalloutDismiss}
                        isCalloutVisible={this.props.isCalloutVisible} />

                    <ColorBox
                        color={this.props.color}
                        _changeColor={this.props._changeColor} />


                    <FabricList
                        color={this.props.color}
                        items={itemsArray}
                        startIndex={0}
                        renderedWindowsAhead={1}
                        renderedWindowsBehind={1} />
                </div>

                <div className={rightCol}></div>
            </div> /* end ms-grid */
        );
    }
}

Experimental.propTypes = {
    _onShowMenuClicked: React.PropTypes.func.isRequired,
    _onCalloutDismiss: React.PropTypes.func.isRequired,
    isCalloutVisible: React.PropTypes.bool.isRequired,
    color: React.PropTypes.string.isRequired,
    _changeColor: React.PropTypes.func.isRequired
}
