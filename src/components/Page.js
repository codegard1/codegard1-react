import React, { Component } from 'react';

import { 
        Home,
        Identity,
        Projects,
        Experimental} from './pages/';

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