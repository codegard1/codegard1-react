import React, { Component } from 'react';
import { fabricColor, colorSuffix } from '../fabricStyles';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

export class ColorBox extends Component {
    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
    }

    _colorArray() {
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

    _handleChange(options) {
        this.props._changeColor(options);
    }

    render() {
        let divClass = fabricColor('bg', this.props.color) + ' animated pulse';
        let divStyles = {
            display: 'block',
            width: '100px',
            height: '100px',
            marginBottom: '1em'
        };

        return (
            <div>
                <Dropdown
                    label='Color'
                    options={this._colorArray()}
                    selectedKey={this.props.color}
                    onChanged={this._handleChange} />
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