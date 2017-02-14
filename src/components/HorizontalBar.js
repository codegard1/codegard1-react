import React, { Component } from 'react';
import { fabricColor } from './fabricStyles';

export class HorizontalBar extends Component {
    render() {
        let bgColor = fabricColor('bg', 'teal');

        return (
            <div className={"ms-Grid-row " + bgColor}>
                <div className="ms-Grid-col ms-u-sm12">&nbsp;</div>
            </div>
        );
    }
};

HorizontalBar.propTypes = {
    color: React.PropTypes.string.isRequired
}