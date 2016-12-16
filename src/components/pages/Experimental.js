import React, { Component } from 'react';
import { Topping } from '../';
import { FormBasic } from '../experiments/FormBasic';
import { CalloutExample } from '../experiments/CalloutExample';
import * as fabric from '../fabricStyles';

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

                </div>

                <div className={rightCol}></div>
            </div> /* end ms-grid */
        );
    }
} 
