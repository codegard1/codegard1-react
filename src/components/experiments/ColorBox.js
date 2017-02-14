import React, { Component } from 'react';
import { fabricColor, colorSuffix } from '../fabricStyles';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

export class ColorBox extends Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
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
        let animations = ['bounce',
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
        ].map(function(current, index, arr){
            return {'key':current,'text':current};
        });
        return animations;
    }

    _handleChangeColor(options) {
        this.props._changeColor(options);
    }

    _handleChangeAnimation(options) {
        console.log(options.key);
    }

    render() {
        let divClass = fabricColor('bg', this.props.color) + ' animated pulse';
        let divStyles = {
            display: 'block',
            width: '100px',
            height: '100px',
            marginBottom: '1em',
            border: '5px solid salmon'
        };

        return (
            <div>
                <Dropdown
                    label='Color'
                    options={this.colorArray()}
                    selectedKey={this.props.color}
                    onChanged={this._handleChangeColor} />
                <Dropdown
                    label='Animation'
                    options={this._animationArray()}
                    selectedKey={'bounce'}
                    onChanged={this._handleChangeAnimation} />
                <div
                    className="ms-fontxl"
                    style={{
                        borderTop: '1px solid #eee',
                        marginTop: '1em'
                    }}>
                    ColorBox
                    <br />
                </div>
                <div style={divStyles} className={divClass}></div>
            </div>
        )
    }
}

ColorBox.propTypes = {
    color: React.PropTypes.string.isRequired,
    _changeColor: React.PropTypes.func.isRequired
};