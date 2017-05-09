import React, { Component } from 'react';
import * as T from 'prop-types';
import {
    Home,
    Identity,
    Projects,
    Experimental
} from './pages/';
import * as fabric from '../fabricStyles';

export class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCalloutVisible: false,
        };

        this._onShowMenuClicked = this._onShowMenuClicked.bind(this);
        this._onCalloutDismiss = this._onCalloutDismiss.bind(this);
    }



    render() {
        let leftCol = fabric.left;
        let innerCol = fabric.inner;
        let rightCol = fabric.right;

        let pageContent = function () {
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
                    return (<Experimental
                        _onShowMenuClicked={this._onShowMenuClicked}
                        _onCalloutDismiss={this._onCalloutDismiss}
                        isCalloutVisible={this.state.isCalloutVisible}
                        color={this.props.color}
                        _changeColor={this.props._changeColor} />);
                    // eslint-disable-next-line
                    break;
                default:
                    return <div><p>No content</p></div>;
            }
        };

        let pageTopping = function () {
            switch (this.props.page) {
                case 'home':
                    return <Topping title="Home" icon="Home" />;
                    // eslint-disable-next-line
                    break;
                case 'identity':
                    return <Topping title="Identity" icon="Contact" />;
                    // eslint-disable-next-line
                    break;
                case 'projects':
                    return <Topping title="Current Projects" icon="Heart" />;
                    // eslint-disable-next-line
                    break;
                case 'experimental':
                    return <Topping title="Experimental" icon="Puzzle" />;
                    // eslint-disable-next-line
                    break;
                default:
                    return <Topping title="" icon="" />;
            }
        };

        return (
            <div className="ms-Grid-row">
                {pageTopping}
                <div className={leftCol}></div>
                <div className={innerCol}>
                    {pageContent}
                </div>
                <div className={rightCol}></div>
            </div>
        );
    }
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

Page.propTypes = {
    page: T.string.isRequired,
    color: T.string.isRequired,
    _changeColor: T.func.isRequired
}