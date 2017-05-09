import React, { Component } from 'react';
import * as T from 'prop-types';
import { fabricColor } from './fabricStyles';

/*
HorizontalBar is a child of App

*/
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
    color: T.string,
}