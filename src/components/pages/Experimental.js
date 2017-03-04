import React, { Component } from 'react';
import { Topping } from '../';
import { FormBasic } from '../experiments/FormBasic';
import { CalloutExample } from '../experiments/CalloutExample';
import { ColorBox } from '../experiments/ColorBox';
import { FabricList } from '../experiments/FabricList';
import * as fabric from '../fabricStyles';
import { learningLog2016 } from '../experiments/learningLog2016';

export class Experimental extends Component {
    render () {
        let leftCol = fabric.left;
        let innerCol = fabric.inner;
        let rightCol = fabric.right;

        return (
            <div className="ms-u-slideRightIn40 ms-Grid-row">
                <Topping title="Experimental" icon="circle" />
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
                        items={learningLog2016}
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
