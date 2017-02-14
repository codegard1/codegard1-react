import React, { Component } from 'react';
import {Home,
        Identity,
        Projects,
        Experimental} from './pages/';

export class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCalloutVisible: false,
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
                return <Home color={this.props.color} />;
                // eslint-disable-next-line
                break;

            case 'identity':
                return <Identity color={this.props.color} />;
                // eslint-disable-next-line
                break;

            case 'projects':
                return <Projects color={this.props.color} />;
                // eslint-disable-next-line
                break;

            case 'experimental':
                return <Experimental
                        _onShowMenuClicked={this._onShowMenuClicked}
                        _onCalloutDismiss={this._onCalloutDismiss}
                        isCalloutVisible={this.state.isCalloutVisible}
                        color={this.props.color}
                        _changeColor={this.props._changeColor} />
                // eslint-disable-next-line
                break;                

            default:
                return <div><p>No content</p></div>;
        } // end switch
    }
}

Page.propTypes = {
    page: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
    _changeColor: React.PropTypes.func.isRequired
}