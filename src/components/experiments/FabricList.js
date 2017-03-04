import React, { Component } from 'react';
import { fabricColor, colorSuffix } from '../fabricStyles';

// Fabric List imports
import { css, getRTL } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { List } from 'office-ui-fabric-react/lib/List';


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
       // let resultCountText = '';
        return (
            <FocusZone direction={FocusZoneDirection.vertical}>
                <TextField label={'Filter by name' + resultCountText} onBeforeChange={this._onFilterChanged} />
                <List
                    items={items}
                    onRenderCell={(item, index) => (
                        <div className='fabricList-itemCell' data-is-focusable={true}>
                            <Image
                                className='fabricList-itemImage'
                                src={'C:\Users\n5014_000\Documents\GitHub\codegard1-react\src\img\avatarkat.png'}
                                width={50}
                                height={50}
                                imageFit={ImageFit.cover}
                            />
                            <div className='fabricList-itemContent'>
                                <div className='fabricList-itemName ms-font-xl'>{item.date}</div>
                                <div className='fabricList-itemIndex ms-font-m'>{`Item ${index}`}</div>
                                <div className='fabricList-itemDesc ms-font-s'>{item.work}</div>
                                <div className='fabricList-itemDesc ms-font-s'>{item.notes}</div>
                            </div>
                            <i className={css('ms-fontColor-themePrimary ms-Icon', {
                                'ms-Icon--chevronRight': !getRTL(),
                                'ms-Icon--chevronLeft': getRTL()
                            })} />
                        </div>
                    )}
                />
            </FocusZone>
        );
    }
    // Fabric Private method
    _onFilterChanged(text) {
        let { items } = this.props;

        this.setState({
            filterText: text,
            items: text ?
                items.filter(item => item.date.toLowerCase().indexOf(text.toLowerCase()) >= 0) :
                items
        });
    }
}