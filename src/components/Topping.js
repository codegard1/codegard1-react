import React, { Component } from 'react';
import * as fabric from './fabricStyles';

export class Topping extends Component {
    render () {
        let icon = this.props.icon;
        let title = this.props.title;
        // TODO: pass in bgColor and fontColor as props
        let bgColor = fabric.bgColor;
        let fontColor = fabric.fontColor;

        return (
            <div className={"ms-Grid-row topping " + bgColor}>
                <div className="ms-Grid-col ms-u-sm12">
                    <span className={"ms-font-xxl " + fontColor}>
                        {title} &nbsp;
                        <i className={"ms-Icon ms-Icon--" + icon}></i>
                    </span>
                </div>
            </div>
        );
    }
};

Topping.propTypes = {
    icon: React.PropTypes.string,
    title: React.PropTypes.string.isRequired
}