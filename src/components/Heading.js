import React, { Component } from 'react';
import * as T from 'prop-types';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import * as fabric from './fabricStyles';



export class Heading extends Component {
    handleChange(options) {
        this.props._changePage(options.key);
    }

    render() {
        let commandBarDefinition = {
            items: [
                {
                    key: 'options',
                    name: 'Options',
                    ariaLabel: 'Site options menu',
                    subMenuProps: {
                        items: [
                            {
                                key: 'home',
                                name: 'Home',
                                ariaLabel: 'Home',
                            },
                            {
                                key: 'identity',
                                name: 'Identity',
                                ariaLabel: 'Identity',
                            },
                            {
                                key: 'experimental',
                                name: 'Experimental',
                                ariaLabel: 'Experimental',
                            },
                        ],
                        isSubMenu: true,
                        isBeakVisible: true,
                    },
                },
            ]
        };
        const fontColor = fabric.fontColor;

        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm8 ms-u-md9 ms-u-lg12 ms-bgColor-neutralLighter header">
                    <span className={"ms-font-su ms-u-fadeIn400 " + fontColor}>
                        <strong>codegard1</strong>
                    </span>
                </div>

                <div className="ms-Grid-col ms-u-sm4 ms-u-md3 ms-u-hiddenLgUp ms-bgColor-neutralLighter header ms-u-fadeIn400">
                    {/*<CommandBar
                        isSearchBoxVisible={false}
                        elipisisAriaLabel='Navigation'
                        items={commandBarDefinition.items}
                    />*/}
                    <Dropdown

                        label=''
                        options={[
                            { key: 'home', text: 'Home' },
                            { key: 'identity', text: 'Identity' },
                            { key: 'projects', text: 'Projects' },                            
                            { key: 'fabric-callout',text:"Fabric Callout" },
                            { key: 'color-box', text: 'Color Box' },
                            { key: 'fabric-list', text: 'Fabric List' },
                            { key: 'basic-form', text: 'Basic Form' },
                            { key: 'fabric-callout', text: 'Fabric Callout'},
                        ]}
                        selectedKey={this.props.selectedKey}
                        onChanged={this.handleChange.bind(this)} />
                </div>
            </div>
        );
    }
};

/* ES6 Syntax */
Heading.propTypes = {
    selectedKey: T.string.isRequired,
    _changePage: T.func.isRequired
}