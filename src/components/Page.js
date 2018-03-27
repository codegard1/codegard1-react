import React, { Component } from "react";
import * as T from "prop-types";
import { Route } from "react-router-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

/* custom stuff */
import { pages } from "./pageContent";
import "./Page.css";

const Pages = pages;
/* Wrapper for page content that passes props from Page to any children components */
const BasePage = props => <Fabric id="BasePage">{props.children}</Fabric>;

export const NavDefinition = [
  {
    links: [
      {
        category: "Pages",
        iconProps: { iconName: "Home" },
        key: "home",
        name: "Home"
      },
      {
        category: "Pages",
        iconProps: { iconName: "Identity" },
        key: "identity",
        name: "Identity"
      },
      {
        category: "Pages",
        iconProps: { iconName: "Projects" },
        key: "projects",
        name: "Projects"
      },
      {
        category: "Pages",
        iconProps: { iconName: "Experiments" },
        key: "experiments",
        name: "Experiments"
      },
      {
        category: "Pages",
        iconProps: { iconName: "Log" },
        key: "learninglog",
        name: "Learning Log"
      },
      {
        category: "Pages",
        iconProps: { iconName: "Blackjack" },
        key: "blackjack",
        name: "Blackjack"
      },
      {
        category: "Pages",
        iconProps: { iconName: "Yes" },
        key: "markdowntest",
        name: "Markdown Test"
      }
    ]
  }
];

/* create array of routes that return page components */
const routes2 = NavDefinition[0].links.map(item => (
  <Route
    key={`route-${item.key}`}
    path={"/" + item.key}
    exact
    component={() => Pages[item.key]}
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
            component={() => Pages["home"]}
          />
          {routes2}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  page: T.string
};

export default Page;
