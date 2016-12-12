import React, { Component } from 'react';

export class Topping extends Component {
    render () {
        let icon = this.props.icon;
        let title = this.props.title;
        // TODO: pass in bgColor and fontColor as props
        let bgColor = 'ms-bgColor-tealLight';
        let fontColor = 'ms-fontColor-tealDark';

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