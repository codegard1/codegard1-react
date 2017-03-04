import React, { Component } from 'react';
import { fabricColor, colorSuffix } from '../fabricStyles';
import { learningLog2016 } from './learningLog2016';
// Fabric List imports
import { css, getRTL } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { List } from 'office-ui-fabric-react/lib/List';
//import { genericItems } from './genericItems';
//import './List.Basic.Example.css';

import { loadTheme } from '@microsoft/load-themed-styles';

loadTheme({
  'themePrimary': 'red'
});

let divStyles = {
    borderTop: '1px solid #eee',
    overflowX: 'hidden'
};

/*var logArrayProcessed = learningLog2016.map(value => {
    return React.createElement('h5', { key: value.key, className: "ms-font-m" }, `Date: ${value.date}`,
        React.createElement('p', { className: "ms-font-m" }, `Work: ${value.work === undefined ? 'none' : value.work}`),
        React.createElement('p', { className: "ms-font-m" }, `Notes: ${value.notes === undefined ? 'none' : value.notes}`)
    );
});*/

export class FabricList extends Component {
    constructor(props) {
        super(props);
        
        this._onFilterChanged = this._onFilterChanged.bind(this);

        this.state = {
            filterText: '',
            // passed from <Experimental>
            items: props.items
        };
        // Fabric private method
    }
    render() {
        //Fabric vars
        let { items: originalItems } = this.props;
        let { items } = this.state;
        let resultCountText = items.length === originalItems.length ? '' : ` (${items.length} of ${originalItems.length} shown)`;
        
        return (
            <FocusZone direction={FocusZoneDirection.vertical}>
                <TextField label={'Filter by name' + resultCountText} onBeforeChange={this._onFilterChanged} />
                <List
                    items={items}
                    onRenderCell={(item, index) => (
                        <div className='ms-ListBasicExample-itemCell' data-is-focusable={true}>
                            <Image
                                className='ms-ListBasicExample-itemImage'
                                src={item.thumbnail}
                                width={50}
                                height={50}
                                imageFit={ImageFit.cover}
                            />
                            <div className='ms-ListBasicExample-itemContent'>
                                <div className='ms-ListBasicExample-itemName ms-font-xl'>{item.date}</div>
                                <div className='ms-ListBasicExample-itemIndex'>{`Item ${index}`}</div>
                                <div className='ms-ListBasicExample-itemDesc ms-font-s'>{item.work}</div>
                            </div>
                            <i className={css('ms-ListBasicExample-chevron ms-Icon', {
                                'ms-Icon--chevronRight': !getRTL(),
                                'ms-Icon--chevronLeft': getRTL()
                            })} />
                        </div>
                    )}
                />
            </FocusZone>
        );
        /* TODO: delete
        <div style={divStyles}>
            <h3>Learning Log 2016</h3>
            <ul>
                {logArrayProcessed}
            </ul>
        </div> */
    }
    // Fabric Private method
    _onFilterChanged(text) {
        let { items } = this.props;

        this.setState({
            filterText: text,
            items: text ?
                items.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0) :
                items
        });
    }
}