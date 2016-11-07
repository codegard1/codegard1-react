import React, { Component } from 'react';
import './App.css';
import { HorizontalBar, Heading } from './MyComponents';
import Page1 from './PageContent';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ms-Grid">
          <Heading />
          <HorizontalBar />
          <DocumentCard onClickHref='http://bing.com'>
            <DocumentCardPreview
              previewImages={[
                {
                  previewImageSrc: require('./documentpreview.png'),
                  iconSrc: require('./iconppt.png'),
                  width: "100%",
                  height: "100%",
                  accentColor: '#ce4b1f'
                }
              ]}
              />
            <DocumentCardTitle title='Revenue stream proposal fiscal year 2016 version02.pptx' />
            <DocumentCardActivity
              activity='Created Feb 23, 2016'
              people={
                [
                  { name: 'Kat Larrson', profileImageSrc: require('./avatarkat.png') }
                ]
              }
              />
          </DocumentCard>
          <HorizontalBar />
        </div>
      </div>
    );
  }
}

export default App;
