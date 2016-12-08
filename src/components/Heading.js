import React, { Component } from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

export class Heading extends Component {
    handleChange (options) {
        this.props.changePage(options.key);
    }
    
    render () {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm6 ms-u-md8 ms-u-lg9 ms-u-xl10 header">
                    <span className="ms-font-su ms-fontColor-tealDark ms-u-fadeIn400">
                        <strong>codegard1</strong>
                    </span>
                </div>
                <div className="ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg3 ms-u-xl2 header">
                    <Dropdown
                        label=''
                        options={[
                                { key: 'home', text: 'Home' },
                                { key: 'identity', text: 'Identity' },
                                { key: 'projects', text: 'Projects' },
                                { key: 'experimental', text: 'Experimental' }
                            ]}
                        selectedKey={this.props.selectedKey}
                        onChanged={this.handleChange.bind(this)}
                        />
                </div>
            </div>
        );
    }
};