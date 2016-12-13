import React, { Component } from 'react';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { Button } from 'office-ui-fabric-react/lib/Button';

export class CalloutExample extends Component {

    render () {
        return (
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
        );
    }
}