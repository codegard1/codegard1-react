import React, { Component } from 'react';
import { 
        Home,
        Identity,
        Projects,
        Experimental} from './pages/';

const left = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg1 ms-u-xl1 ms-u-xxl2";
const inner = "ms-Grid-col ms-u-sm12 ms-u-md10 ms-u-lg8 ms-u-xl7 ms-u-xxl5";
const right = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg3 ms-u-xl4 ms-u-xxl5";

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
                return <Home 
                        left={left}
                        inner={inner}
                        right={right} />;
                // eslint-disable-next-line
                break;

            case 'identity':
                return <Identity
                        left={left}
                        inner={inner}
                        right={right} />;
                // eslint-disable-next-line
                break;

            case 'projects':
                return <Projects
                        left={left}
                        inner={inner}
                        right={right} />;
                // eslint-disable-next-line
                break;

            case 'experimental':
                return <Experimental
                        left={left}
                        inner={inner}
                        right={right}
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

Page.propTypes = {
    page: React.PropTypes.string.isRequired
}