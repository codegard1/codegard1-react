import React, { Component } from 'react';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

let divStyles = {
    borderTop: '1px solid #eee',
    overflowX: 'hidden'
};

export class CalloutExample extends Component {
    render () {

        let isCalloutVisible = this.props.isCalloutVisible;
        this._onShowMenuClicked = this.props._onShowMenuClicked;
        this._onCalloutDismiss = this.props._onCalloutDismiss;

        return (
            <div 
            className="ms-font-xl" 
            ref={(calloutTarget) => this._menuButtonElement = calloutTarget}
            style={divStyles} >
                <p>Fabric UI Callout Example</p>
                <p>isCalloutVisible? : {JSON.stringify(isCalloutVisible)}</p>
                <p>
                    <PrimaryButton onClick={this._onShowMenuClicked}>
                        {isCalloutVisible ? 'Hide Callout' : 'Show Callout'}
                    </PrimaryButton>
                </p>

                {isCalloutVisible && (
                    <Callout
                        className="chris-Callout"
                        targetElement={this._menuButtonElement}
                        onDismiss={this._onCalloutDismiss}
                        setInitialFocus={true} >
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

CalloutExample.propTypes = {
    isCalloutVisible:   React.PropTypes.bool.isRequired,
    _onShowMenuClicked: React.PropTypes.func.isRequired,
    _onCalloutDismiss:  React.PropTypes.func.isRequired
};