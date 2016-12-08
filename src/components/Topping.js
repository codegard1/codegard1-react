import React, { Component } from 'react';

export class Topping extends Component {
    render () {
        var icon = this.props.icon;
        var title = this.props.title;
        return (
            <div className="ms-Grid-row ms-bgColor-tealLight topping">
                <div className="ms-Grid-col ms-u-sm12">
                    <span className="ms-font-xxl ms-fontColor-tealDark">
                        {title} &nbsp;
                        <i className={"ms-Icon ms-Icon--" + icon}></i>
                    </span>
                </div>
            </div>
        );
    }
};