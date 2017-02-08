import React, {Component} from 'react';
import {fabricColor, colorPrefix, colorSuffix} from '../fabricStyles';
import {Dropdown} from 'office-ui-fabric-react/lib/Dropdown';

export class ColorBox extends Component {
    
    render() {
        let divStyles = {
            display: 'block',
            width: '100px',
            height: '100px',
            marginBottom: '1em'
        };
        let divClass = fabricColor('bg', 'purpleLight') + ' ' + fabricColor('border', 'purple') + ' animated pulse';

        return (
            <div>
                <div
                    className="ms-font-xl"
                    style={{
                    borderTop: '1px solid #eee',
                    marginTop: '1em'
                }}>
                    ColorBox
                    <br/>
                </div>
                <div style={divStyles} className={divClass}></div>
            </div>
        )
    }
}

ColorBox.propTypes = {
    /* isCalloutVisible : React.PropTypes.bool.isRequired,
        _onShowMenuClicked : React.PropTypes.func.isRequired,
        _onCalloutDismiss : React.PropTypes.func.isRequired */
};