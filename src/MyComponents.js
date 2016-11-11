import React, { Component } from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

class Heading1 extends Component{
    handleChange (options) {
        this.props.changePage(options.key);
    }

    render () {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm12 ms-u-md8 ms-u-lg9 ms-u-xl10 header">
                    <span className="ms-font-xxl ms-fontColor-tealDark ms-u-fadeIn400">
                        <strong>codegard1</strong> &nbsp;
                        <i className="ms-Icon ms-Icon--circleCoffee"></i>
                    </span>
                </div>
                <div className="ms-Grid-col ms-u-hiddenSm ms-u-md4 ms-u-lg3 ms-u-xl2 header">
                    <Dropdown
                        label=''
                        options={
                            [
                                { key: 'home', text: 'Home' },
                                { key: 'identity', text: 'Identity' },
                                { key: 'projects', text: 'Projects' }
                            ]
                        }
                        selectedKey={this.props.selectedKey}
                        onChanged={this.handleChange.bind(this)}
                        />
                </div>
            </div>
        );

    }
};

class HorizontalBar extends Component {
    render () {
        return (
            <div className="ms-Grid-row ms-bgColor-teal">
                <div className="ms-Grid-col ms-u-sm12">&nbsp;</div>
            </div>
        );
    }
};

class Topping extends Component{
    render () {
        var icon = this.props.icon;
        var title = this.props.title;
        return (
            <div className="ms-Grid-row ms-bgColor-tealLight">
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

module.exports = { 
    Heading1, 
    HorizontalBar, 
    Topping 
};