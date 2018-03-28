import React, { Component } from "react";
import * as T from "prop-types";
import { Route } from "react-router-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

/* custom stuff */
import { NavDefinition } from "./pageContent";
import "./Page.css";

/* Wrapper for page content that passes props from Page to any children components */
const BasePage = props => <Fabric id="BasePage">{props.children}</Fabric>;

/* create array of routes that return page components */
const routes = NavDefinition[0].links.map(item => (
  <Route
    key={`route-${item.key}`}
    path={"/" + item.key}
    exact
    component={() => item.content}
  />
));

export class Page extends Component {
  render() {
    return (
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12">
          <Route
            key="route-default"
            path="/"
            exact
            component={() => NavDefinition[0].links[0].content}
          />
          {routes}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  page: T.string
};

export default Page;
