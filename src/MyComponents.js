var React = require('react');

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
                <div className="ms-Grid-col ms-u-sm12 ">
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
    HorizontalBar, 
    Topping 
};