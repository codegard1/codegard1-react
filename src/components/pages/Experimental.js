import React, { Component } from 'react';
import * as T from 'prop-types';

import { FormBasic } from '../experiments/FormBasic';
import { CalloutExample } from '../experiments/CalloutExample';
import { ColorBox } from '../experiments/ColorBox';
import { FabricList } from '../experiments/FabricList';



export class Experimental extends Component {
    render() {
        return (
            <div>

            This page is deprecated (5/8/2017)
                
            </div>
        );
    }
}

Experimental.propTypes = {
    _onShowMenuClicked: T.func.isRequired,
    _onCalloutDismiss: T.func.isRequired,
    isCalloutVisible: T.bool.isRequired,
    color: T.string.isRequired,
    _changeColor: T.func.isRequired
}
