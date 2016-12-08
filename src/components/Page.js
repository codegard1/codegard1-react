import React, { Component } from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { Topping } from './Topping';
import { Home } from './pages/Home';
import { Identity } from './pages/Identity';
import { Projects } from './pages/Projects';

export class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCalloutVisible: false
        };
        
        this._onShowMenuClicked = this._onShowMenuClicked.bind(this);
        this._onCalloutDismiss = this._onCalloutDismiss.bind(this);
    }

    render () {
        let isCalloutVisible = this.state.isCalloutVisible;

        const left = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg1 ms-u-xl1 ms-u-xxl2";
        const inner = "ms-Grid-col ms-u-sm12 ms-u-md10 ms-u-lg8 ms-u-xl7 ms-u-xxl5";
        const right = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg3 ms-u-xl4 ms-u-xxl5";

        switch (this.props.page) {
            case 'home':
                return <Home />;
                // eslint-disable-next-line
                break;

            case 'identity':
                return <Identity />;
                // eslint-disable-next-line
                break;

            case 'projects':
                return <Projects />;
                // eslint-disable-next-line
                break;

            case 'experimental':
                
                return (
                    <div className="ms-u-slideRightIn40 ms-Grid-row">
                    <Topping title="Experimental" icon="circle" />
                        <div className={left}></div>

                        <div className={inner}>
                            <div className="ms-font-xl" ref={ (calloutTarget) => this._menuButtonElement = calloutTarget }>
                                <p>Fabric UI Callout Example</p>
                                <p>isCalloutVisible? : {JSON.stringify(isCalloutVisible)}</p> 
                                <p>
                                    <Button onClick={this._onShowMenuClicked}>
                                        { isCalloutVisible ? 'Hide Callout' : 'Show Callout' }
                                        </Button>
                                    </p>
                                
                                                           

                                { isCalloutVisible && (
                                <Callout
                                    className="chris-Callout"
                                    targetElement={ this._menuButtonElement }
                                    onDismiss={ this._onCalloutDismiss }
                                    setInitialFocus={ true }
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
                                ) }
                            </div>
                        </div>

                        <div className={right}></div>
                    </div>
                );
                // eslint-disable-next-line
                break;
            case 'experimental1':
                return (
                    <div className="ms-u-slideRightIn40 ms-Grid-row">
                    <Topping title="Experimental" icon="circle" />
                        <div className={left}></div>

                        <div className={inner}>
                            <div className="ms-font-xl">
                                <div>
                                    <p>Yo, world. This stuff is hidden for now. (12/1/16)</p>
                                </div>
                            </div>
                        </div>

                        <div className={right}></div>
                    </div>
                );
                // eslint-disable-next-line
                break;

            default:
                return <div><p>No content</p></div>;
        } // end switch
    }

    _onShowMenuClicked() {
        console.log('_onShowMenuClicked called');
        this.setState({
            isCalloutVisible: !this.state.isCalloutVisible
        });
    }

    _onCalloutDismiss() {
        console.log('_onCalloutDismiss called');
        this.setState({
            isCalloutVisible: false
        });
    }
}