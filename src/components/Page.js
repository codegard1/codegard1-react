import React, { Component } from "react";
import * as T from "prop-types";
import { Nav } from "office-ui-fabric-react/lib/Nav";
import { Link as FabricLink } from "office-ui-fabric-react/lib/Link";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

/* custom stuff */
import * as fabric from "./fabricStyles";
import * as Pages from "./pageContent";
import "./Page.css";

/* Wrapper for page content that passes props from Page to any children components */
const BasePage = props => <Fabric id="BasePage">{props.children}</Fabric>;

export const NavDefinition = [
  {
    links: [
      {
        key: "home",
        name: "Home"
      },
      {
        key: "identity",
        name: "Identity"
      },
      {
        key: "projects",
        name: "Projects"
      },
      {
        key: "experiments",
        name: "Experiments"
      },
      {
        key: "learninglog",
        name: "Learning Log"
      }
    ]
  }
];

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <BasePage {...this.props}>{Pages.home}</BasePage>
  },
  {
    path: "/home",
    exact: false,
    main: () => <BasePage {...this.props}>{Pages.home}</BasePage>
  },
  {
    path: "/identity",
    exact: false,
    main: () => <BasePage {...this.props}>{Pages.identity}</BasePage>
  },
  {
    path: "/projects",
    exact: false,
    main: () => <BasePage {...this.props}>{Pages.projects}</BasePage>
  },
  {
    path: "/experiments",
    exact: false,
    main: () => <BasePage {...this.props}>{Pages.experiments}</BasePage>
  },
  {
    path: "/learninglog",
    exact: false,
    main: () => <BasePage {...this.props}>{Pages.learninglog}</BasePage>
  }
];

export class Page extends Component {
  render() {
    /* classNames for MS-Grid columns */
    const leftCol = fabric.left;
    const rightCol = fabric.right;

    return (
      <Router>
        <div className="ms-Grid-row">
          <div className={leftCol}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
          <div className={rightCol}>
            <span className="ms-font-xl">Pages</span>
            <Nav
              groups={NavDefinition}
              onRenderLink={link => [
                <span key={"navItem-" + link.name} className="ms-font-m">
                  <Link to={`/${link.key}`}>{link.name}</Link>
                </span>
              ]}
              isOnTop={false}
              onLinkClick={this.props._onNavLinkClicked}
              selectedKey={this.props.page}
              initialSelectedKey={"home"}
            />
          </div>
        </div>
      </Router>
    );
  }
}

Page.propTypes = {
  page: T.string,
  _onNavLinkClicked: T.func
};

export default Page;
