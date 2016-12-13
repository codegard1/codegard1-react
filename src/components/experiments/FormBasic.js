import React, { Component } from 'react';

let divStyles = {
    border: '1px solid #eee',
    'backgroundColor':'ghostwhite'
};

export class FormBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: 'Chris Rules'
        };

        this._handleChange = this._handleChange.bind(this);
    }

	_handleChange (e) {
	  this.setState({
	    userInput: e.target.value
	  });
	}

	render () {
	  return (
        <div style={divStyles}>
            <p className="ms-font-l">Basic Form</p>
            <p>
                <input 
                    className="ms-font-m"
                    type="text"
                    onChange={this._handleChange} 
                    value={this.state.userInput} />
            </p>
            <p className="ms-font-su">{this.state.userInput}</p>
        </div>
	  );
	}
}