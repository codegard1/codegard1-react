import * as React from 'react';
import {
  css,
  getRTL
} from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { List } from 'office-ui-fabric-react/lib/List';
import './List.Basic.Example.css';

export class ListBasicExample extends React.Component {
  constructor(props) {
    super(props);

    this._onFilterChanged = this._onFilterChanged.bind(this);

    this.state = {
      filterText: '',
      items: props.items
    };
  }

  render() {
    let { items: originalItems } = this.props;
    let { items } = this.state;
    let resultCountText = items.length === originalItems.length ? '' : ` (${items.length} of ${originalItems.length} shown)`;

    return (
      <FocusZone direction={ FocusZoneDirection.vertical }>
        <TextField label={ 'Filter by name' + resultCountText } onBeforeChange={ this._onFilterChanged } />
        <List
          items={ items }
          onRenderCell={ (item, index) => (
            <div className='ms-ListBasicExample-itemCell' data-is-focusable={ true }>
              <Image
                className='ms-ListBasicExample-itemImage'
                src={ item.thumbnail }
                width={ 50 }
                height={ 50 }
                imageFit={ ImageFit.cover }
              />
              <div className='ms-ListBasicExample-itemContent'>
                <div className='ms-ListBasicExample-itemName ms-font-xl'>{ item.name }</div>
                <div className='ms-ListBasicExample-itemIndex'>{ `Item ${index}` }</div>
                <div className='ms-ListBasicExample-itemDesc ms-font-s'>{ item.description }</div>
              </div>
              <i className={ css('ms-ListBasicExample-chevron ms-Icon', {
                'ms-Icon--chevronRight': !getRTL(),
                'ms-Icon--chevronLeft': getRTL()
              }) } />
            </div>
          ) }
        />
      </FocusZone>
    );
  }

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
