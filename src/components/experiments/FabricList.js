import React, { Component } from 'react';
//import { fabricColor, colorSuffix } from '../fabricStyles';

// Fabric   List imports
import { css, getRTL } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { List } from 'office-ui-fabric-react/lib/List';


let divStyles = {
    borderTop: '1px solid #eee',
    overflowX: 'hidden',
    overflowY: 'auto',
    maxHeight: '80vh',
    padding: '20px 0'
};

export class FabricList extends Component {
    constructor(props) {
        super(props);

        this._onFilterChanged = this._onFilterChanged.bind(this);

        this.state = {
            filterText: '',
            items: props.items,
        };
    }
    render() {
        let { items: originalItems } = this.props;
        let { items } = this.state;
        let resultCountText = items.length === originalItems.length ? '' : ` (${items.length} of ${originalItems.length} shown)`;

        return (
            <div style={divStyles}>
                <p className="ms-font-xl">Learning Log</p>
                <FocusZone direction={FocusZoneDirection.vertical}>
                    <TextField label={`Filter by Date` + resultCountText} onBeforeChange={this._onFilterChanged} />
                    <List
                        items={items}
                        onRenderCell={(item, index) => (
                            <div className='fabricList-itemCell' data-is-focusable={true}>
                                <Image
                                    className='fabricList-itemImage'
                                    src={'https://placeholdit.imgix.net/~text?txtsize=17&txt=176%C3%97176&w=176&h=176'}
                                    width={50}
                                    height={50}
                                    imageFit={ImageFit.cover}
                                />
                                <div className='fabricList-itemContent'>
                                    <div className='fabricList-itemName ms-font-xl'>{item.date}</div>
                                    <div className='fabricList-itemIndex ms-font-xs'>{`Item ${index}`}</div>
                                    <div className='fabricList-itemDesc'>
                                        <p className="ms-font-xs"><span className="ms-font-s"><i className="ms-Icon ms-Icon--QuickNote"></i>Work</span>
                                        <br />
                                        {item.work}
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className='fabricList-itemDesc'>
                                        <p className="ms-font-xs"><span className="ms-font-s"><i className="ms-Icon ms-Icon--QuickNote"></i>Notes</span>
                                            <br />
                                            {item.notes}
                                        </p>
                                    </div>
                                </div>
                                <i className={css('ms-fontColor-themePrimary ms-Icon', {
                                    'ms-Icon--chevronRight': !getRTL(),
                                    'ms-Icon--chevronLeft': getRTL()
                                })} />
                            </div>
                        )}
                    />
                </FocusZone>
            </div>
        );
    }
    // Fabric Private method
    _onFilterChanged(text) {
        let { items } = this.props;

        this.setState({
            filterText: text,
            items: text ?
                items.filter(
                    item => item.date.toLowerCase().indexOf(text.toLowerCase()) >= 0) :
                items
        });
    }
}