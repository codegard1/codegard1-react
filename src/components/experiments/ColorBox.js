import React, { Component } from 'react';
import { fabricColor, colorSuffix } from '../fabricStyles';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';


export class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: 'bounce'
        };
        this._handleChangeColor = this._handleChangeColor.bind(this);
        this._handleChangeAnimation = this._handleChangeAnimation.bind(this);
    }

    colorArray() {
        let arr = [];
        if (colorSuffix) {
            for (var key in colorSuffix) {
                if (colorSuffix.hasOwnProperty(key)) {
                    arr.push({
                        "key": key,
                        "text": key
                    });
                }
            }
            return arr;
        }
    }

    _animationArray() {
        return ['bounce',
            'flash',
            'pulse',
            'rubberBand',
            'shake',
            'headShake',
            'swing',
            'tada',
            'wobble',
            'jello',
            'bounceIn',
            'bounceInDown',
            'bounceInLeft',
            'bounceInRight',
            'bounceInUp',
            'bounceOut',
            'bounceOutDown',
            'bounceOutLeft',
            'bounceOutRight',
            'bounceOutUp',
            'fadeIn',
            'fadeInDown',
            'fadeInDownBig',
            'fadeInLeft',
            'fadeInLeftBig',
            'fadeInRight',
            'fadeInRightBig',
            'fadeInUp',
            'fadeInUpBig',
            'fadeOut',
            'fadeOutDown',
            'fadeOutDownBig',
            'fadeOutLeft',
            'fadeOutLeftBig',
            'fadeOutRight',
            'fadeOutRightBig',
            'fadeOutUp',
            'fadeOutUpBig',
            'flipInX',
            'flipInY',
            'flipOutX',
            'flipOutY',
            'lightSpeedIn',
            'lightSpeedOut',
            'rotateIn',
            'rotateInDownLeft',
            'rotateInDownRight',
            'rotateInUpLeft',
            'rotateInUpRight',
            'rotateOut',
            'rotateOutDownLeft',
            'rotateOutDownRight',
            'rotateOutUpLeft',
            'rotateOutUpRight',
            'hinge',
            'rollIn',
            'rollOut',
            'zoomIn',
            'zoomInDown',
            'zoomInLeft',
            'zoomInRight',
            'zoomInUp',
            'zoomOut',
            'zoomOutDown',
            'zoomOutLeft',
            'zoomOutRight',
            'zoomOutUp',
            'slideInDown',
            'slideInLeft',
            'slideInRight',
            'slideInUp',
            'slideOutDown',
            'slideOutLeft',
            'slideOutRight',
            'slideOutUp'
        ].sort().map(function (current, index, arr) {
            return { 'key': current, 'text': current };
        });
    }

    _handleChangeColor(options) {
        this.props._changeColor(options);
    }

    _handleChangeAnimation(options) {
        this.setState({
            animation: options.key
        });
    }

    render() {
        let divClass = fabricColor('bg', this.props.color) + ' animated ' + this.state.animation;
        let divStyles = {
            display: 'block',
            width: '100px',
            height: '100px',
            marginBottom: '1em',
            border: '5px solid salmon',
            float: 'right'
        };

        return (
            <div className="ms-Grid">
                <p className="ms-font-xl">ColorBox</p>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-u-sm8 ms-u-md8 ms-u-lg8 ms-u-xl8">
                        <Dropdown
                            label='Color'
                            options={this.colorArray()}
                            selectedKey={this.props.color}
                            onChanged={this._handleChangeColor} />
                        <Dropdown
                            label='Animation'
                            options={this._animationArray()}
                            selectedKey={this.state.animation}
                            onChanged={this._handleChangeAnimation} />
                    </div>
                    <div className="ms-Grid-col ms-u-sm4 ms-u-md4 ms-u-lg4 ms-u-xl4">
                        <div 
                        style={divStyles} 
                        className={divClass} 
                        id="colorBox"></div>
                    </div>
                </div>
            </div>
        )
    }
}

ColorBox.propTypes = {
    color: React.PropTypes.string.isRequired,
    _changeColor: React.PropTypes.func.isRequired
};