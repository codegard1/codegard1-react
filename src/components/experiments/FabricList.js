import React, { Component } from 'react';
import { fabricColor, colorSuffix } from '../fabricStyles';

let divStyles = {
    borderTop: '1px solid #eee',
    overflowX: 'hidden'
};

export class FabricList extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }
    
    render () {
        return <div style={divStyles}>Hello, world!</div>
    }
}