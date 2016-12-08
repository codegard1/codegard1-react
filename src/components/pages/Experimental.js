import React, { Component } from 'react';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { Button } from 'office-ui-fabric-react/lib/Button';

import { Topping } from '../Topping';

const left = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg1 ms-u-xl1 ms-u-xxl2";
const inner = "ms-Grid-col ms-u-sm12 ms-u-md10 ms-u-lg8 ms-u-xl7 ms-u-xxl5";
const right = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg3 ms-u-xl4 ms-u-xxl5";

export class Experimental extends Component {
    render () {
        let isCalloutVisible = this.props.isCalloutVisible;
        this._onShowMenuClicked = this.props._onShowMenuClicked;
        this._onCalloutDismiss = this.props._onCalloutDismiss;

        return (
            <div className="ms-u-slideRightIn40 ms-Grid-row">
                <Topping title="Experimental" icon="circle" />
                <div className={left}></div>

                <div className={inner}>
                    <div className="ms-font-xl" ref={(calloutTarget) => this._menuButtonElement = calloutTarget}>
                        <p>Fabric UI Callout Example</p>
                        <p>isCalloutVisible? : {JSON.stringify(isCalloutVisible)}</p>
                        <p>
                            <Button onClick={this._onShowMenuClicked}>
                                {isCalloutVisible ? 'Hide Callout' : 'Show Callout'}
                            </Button>
                        </p>

                        {isCalloutVisible && (
                            <Callout
                                className="chris-Callout"
                                targetElement={this._menuButtonElement}
                                onDismiss={this._onCalloutDismiss}
                                setInitialFocus={true}
                                >
                                <div className='chris-Callout-header'>
                                    <p className='chris-Callout-title'>
                                        My name is Craig Callout
                                        </p>
                                </div>
                                <div className='chris-Callout-inner'>
                                    <div className='chris-Callout-content'>
                                        <p className='chris-Callout-subText'>
                                            Often I appear out of nowhere to explain, unobtrusively, what you may not already know.
                                            </p>
                                    </div>
                                </div>
                            </Callout>
                        )}
                    </div>
                </div>

                <div className={right}></div>
            </div> /* end ms-grid */
        );
    }
} 