var React = require('react');
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

var Heading = React.createClass({
    render: function () {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm12 ms-u-md8 ms-u-lg9 ms-u-xl10 header">
                    <span className="ms-font-xxl ms-fontColor-tealDark ms-u-fadeIn400">
                        <strong>codegard1</strong> &nbsp;
                        <i className="ms-Icon ms-Icon--circleCoffee"></i>
                    </span>
                </div>
                <div className="ms-Grid-col ms-u-hiddenSm ms-u-md4 ms-u-lg3 ms-u-xl2 header">
                    <span className="ms-font-m ms-fontColor-blueMid">
                    online internet presence website
                    </span>
                </div>
            </div>
        );
    }
});

var Heading1 = React.createClass({
    handleChange: function (options) {
        this.props.changePage(options.key);
    },
    render: function () {
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
                        onChanged={this.handleChange}
                        />
                </div>
            </div>
        );

    }
});

var HorizontalBar = React.createClass({
    render: function () {
        return (
            <div className="ms-Grid-row ms-bgColor-teal">
                <div className="ms-Grid-col ms-u-sm12">&nbsp;</div>
            </div>
        );
    }
});

var Topping = React.createClass({
    render: function () {
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
});

module.exports = { 
    Heading,
    Heading1, 
    HorizontalBar, 
    Topping 
};