import React, { Component } from 'react';
import { Topping } from './Topping';

import { Home } from './pages/Home';
import { Identity } from './pages/Identity';
import { Projects } from './pages/Projects';
import { Experimental } from './pages/Experimental';

export class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCalloutVisible: false
        };

        this._onShowMenuClicked = this._onShowMenuClicked.bind(this);
        this._onCalloutDismiss = this._onCalloutDismiss.bind(this);
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

    render() {

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
                return <Experimental
                    _onShowMenuClicked={this._onShowMenuClicked}
                    _onCalloutDismiss={this._onCalloutDismiss}
                    isCalloutVisible={this.state.isCalloutVisible} />
                // eslint-disable-next-line
                break;                

            default:
                return <div><p>No content</p></div>;
        } // end switch
    }
}