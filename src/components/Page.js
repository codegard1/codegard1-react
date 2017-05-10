import React, { Component } from 'react';
import * as T from 'prop-types';

import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { Link } from 'office-ui-fabric-react/lib/Link';

import { Topping } from './Topping';


import {
    Home,
    Identity,
    Projects,
    Experimental
} from './pages/';

import { FormBasic } from './experiments/FormBasic';
import { CalloutExample } from './experiments/CalloutExample';
import { ColorBox } from './experiments/ColorBox';
import { FabricList } from './experiments/FabricList';

import { learningLog2016 } from './experiments/learningLog2016';
import * as fabric from './fabricStyles';

export class Page extends Component {
    render() {
        let leftCol = fabric.left,
            innerCol = fabric.inner,
            rightCol = fabric.right;

        let pageContent = this._returnContent(this.props.selectedNavItem),
            pageTopping = this._returnTopping(this.props.selectedNavItem);

        let NavDefinition = [
            {
                name: 'Pages',
                links: [
                    {
                        key: 'home',
                        name: 'Home',
                    },
                    {
                        key: 'identity',
                        name: 'Identity',
                    },
                    {
                        key: 'projects',
                        name: 'Projects',
                    },
                ]
            },
            {
                name: 'Experiments',
                links: [
                    {
                        key: 'fabric-callout',
                        name: 'Fabric Callout'
                    },
                    {
                        key: 'color-box',
                        name: 'Color Box'
                    },
                    {
                        key: 'fabric-list',
                        name: 'Fabric List'
                    },
                    {
                        key: 'basic-form',
                        name: 'Basic Form'
                    },
                ]
            }
        ];

        // Prepare the learningLog2016 array for passing to <FabricList>
        let itemsArray = learningLog2016.map(function (item) {
            let key = item.key || Math.round(Math.random() * 10000);
            let date = item.date || 'no date';
            let work = item.work || [];
            let notes = item.notes || [];
            let workReact = [];
            let notesReact = [];

            if (work.length > 0) {
                workReact = work.map((item, index) => React.createElement('li', { key: (date + "-work-" + index) }, item));
            }
            if (notes.length > 0) {
                notesReact = notes.map((item, index) => React.createElement('li', { key: (date + "-note-" + index) }, item));
            }

            return { 'date': date, 'work': workReact, 'notes': notesReact, 'key': ("learningLog-" + key) };
        });

        return (
            <div className="ms-Grid-row">
                {pageTopping}
                <div className={leftCol}></div>
                <div className={innerCol}>
                    {pageContent}
                </div>
                <div className={rightCol}>
                    <Nav groups={NavDefinition}
                        onRenderLink={(link) => ([
                            <span key={"navItem-" + link.name} className="ms-font-m"><Link>{link.name}</Link></span>,
                        ])}
                        isOnTop={false}
                        onLinkClick={this.props._onNavLinkClicked}
                        selectedKey={this.props.selectedNavItem}
                        initialSelectedKey={'home'}
                    />
                </div>
            </div>
        );
    }

    _returnContent(p) {
        switch (p) {
            case 'home':
                return <Home color={this.props.color} />;
                // eslint-disable-next-line
                break;
            case 'identity':
                return <Identity color={this.props.color} />;
                // eslint-disable-next-line
                break;
            case 'projects':
                return <Projects color={this.props.color} />;
                // eslint-disable-next-line
                break;
            case 'experimental':
                return (<Experimental />);
                // eslint-disable-next-line
                break;
            case 'basic-form':
                return <FormBasic />
                // eslint-disable-next-line
                break;
            case 'color-box':
                return (
                    <ColorBox
                        color={this.props.color}
                        _changeColor={this.props._changeColor} />
                );
                // eslint-disable-next-line
                break;
            case 'fabric-list':
                return (
                    <FabricList
                        color={this.props.color}
                        items={this.itemsArray}
                        startIndex={0}
                        renderedWindowsAhead={1}
                        renderedWindowsBehind={1} />
                );
                // eslint-disable-next-line
                break;
            case 'fabric-callout':
                return (
                    <CalloutExample
                        _onShowMenuClicked={this.props._onShowMenuClicked}
                        _onCalloutDismiss={this.props._onCalloutDismiss}
                        isCalloutVisible={this.props.isCalloutVisible} />
                );
                // eslint-disable-next-line
                break;
            default:
                return <div><p>No content</p></div>;
        }
    }

    _returnTopping(p) {
        switch (this.props.page) {
            case 'home':
                return <Topping title="Home" icon="Home" />;
                // eslint-disable-next-line
                break;
            case 'identity':
                return <Topping title="Identity" icon="Contact" />;
                // eslint-disable-next-line
                break;
            case 'projects':
                return <Topping title="Current Projects" icon="Heart" />;
                // eslint-disable-next-line
                break;
            case 'experimental':
                return <Topping title="Experimental" icon="Puzzle" />;
                // eslint-disable-next-line
                break;
            case 'basic-form':
                return <Topping title="Experimental" icon="Puzzle" />;
                // eslint-disable-next-line
                break;
            case 'color-box':
                return <Topping title="Experimental" icon="Puzzle" />;
                // eslint-disable-next-line
                break;
            case 'fabric-list':
                return <Topping title="Experimental" icon="Puzzle" />;
                // eslint-disable-next-line
                break;
            case 'fabric-callout':
                return <Topping title="Experimental" icon="Puzzle" />;
                // eslint-disable-next-line
                break;
            default:
                return <Topping title="" icon="" />;
        }
    }   
}

Page.propTypes = {
    page: T.string.isRequired,
    color: T.string.isRequired,
    _changeColor: T.func.isRequired,
    selectedNavItem: T.string,
    _onNavLinkClicked: T.func,
    _onShowMenuClicked: T.func,
    _onCalloutDismis: T.func,
    isCalloutVisible: T.bool,
}