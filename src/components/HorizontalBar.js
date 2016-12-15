import React, { Component } from 'react';
import * as fabric from './fabricStyles';

export class HorizontalBar extends Component {
    render () {
        let bgColor = fabric.bgColor;

        return (
            <div className={"ms-Grid-row " + bgColor}>
                <div className="ms-Grid-col ms-u-sm12">&nbsp;</div>
            </div>
        );
    }
};