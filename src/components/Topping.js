import React, { Component } from 'react';
import { fabricColor } from './fabricStyles';

export class Topping extends Component {
    render() {
        let icon = this.props.icon;
        let title = this.props.title;
        // TODO: pass in bgColor and fontColor as props
        let bgColor = fabricColor('bg', 'tealLight');
        let fontColor = fabricColor('font', 'tealDark');

        return (
            <div className={"ms-Grid-col ms-u-sm12 topping " + bgColor}>
                <span className={"ms-font-xxl " + fontColor}>
                    {title} &nbsp;
                        <i className={"ms-Icon ms-Icon--" + icon}></i>
                </span>
            </div>
        );
    }
};

Topping.propTypes = {
    icon: React.PropTypes.string,
    title: React.PropTypes.string.isRequired
}