import React, { Component } from "react";
import * as T from "prop-types";
import { Nav } from "office-ui-fabric-react/lib/Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

/* custom stuff */
import * as fabric from "./fabricStyles";
import * as Pages from "./pageContent";
import "./Page.css";
import Table from "./blackjack/Table";

/* Wrapper for page content that passes props from Page to any children components */
const BasePage = props => <Fabric id="BasePage">{props.children}</Fabric>;

export const NavDefinition = [
  {
    links: [
      {
        ariaLabel: "Home",
        category: "Pages",
        iconProps: { iconName: "Home" },
        key: "home",
        name: "Home"
      },
      {
        ariaLabel: "Identity",
        category: "Pages",
        iconProps: { iconName: "Identity" },
        key: "identity",
        name: "Identity"
      },
      {
        ariaLabel: "Projects",
        category: "Pages",
        iconProps: { iconName: "Projects" },
        key: "projects",
        name: "Projects"
      },
      {
        ariaLabel: "Experiments",
        category: "Pages",
        iconProps: { iconName: "Experiments" },
        key: "experiments",
        name: "Experiments"
      },
      {
        ariaLabel: "Log",
        category: "Pages",
        iconProps: { iconName: "Log" },
        key: "learninglog",
        name: "Learning Log"
      },
      {
        ariaLabel: "Blackjack",
        category: "Pages",
        iconProps: { iconName: "Blackjack" },
        key: "blackjack",
        name: "Blackjack"
      }
    ]
  }
];

/* make NavDefinition more Dropdown-friendly */
const pagesMenuItems = NavDefinition[0].links.map(item => ({
  ariaLabel: item.ariaLabel,
  category: item.category,
  disabled: false,
  iconProps: item.iconProps,
  key: item.key,
  name: item.name,
  onClick: ev => {
    ev.preventDefault();
    console.log(item.key, " clicked!");
  }
}));

/* group menu items into a dropdown menu */
const pagesMenu = [
  {
    key: "pages-menu",
    name: "Pages",

    onClick(ev) {
      ev.preventDefault();
    },
    subMenuProps: {
      items: pagesMenuItems,
      isSubMenu: true,
      isBeakVisible: true
    }
  }
];

/* export definition to CommandBar in Heading */
export const CommandBarDefinition = pagesMenu;

export const routes = [
  {
    path: "/",
    exact: true,
    main: () => <BasePage {...this.props}>{Pages.home}</BasePage>,
    key: "home"
  },
  {
    path: "/home",
    exact: false,
    main: () => <BasePage {...this.props}>{Pages.home}</BasePage>,
    key: "home"
  },
  {
    path: "/identity",
    exact: false,
    main: () => <BasePage {...this.props}>{Pages.identity}</BasePage>,
    key: "identity"
  },
  {
    path: "/projects",
    exact: false,
    main: () => <BasePage {...this.props}>{Pages.projects}</BasePage>,
    key: "projects"
  },
  {
    path: "/experiments",
    exact: false,
    main: () => <BasePage {...this.props}>{Pages.experiments}</BasePage>,
    key: "experiments"
  },
  {
    path: "/learninglog",
    exact: false,
    main: () => <BasePage {...this.props}>{Pages.learninglog}</BasePage>,
    key: "learninglog"
  },
  {
    path: "/blackjack",
    exact: false,
    main: () => <Table />,
    key: "blackjack"
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
                <Link
                  style={{ display: "block", textDecoration: "none" }}
                  key={"navItem-" + link.name}
                  className="ms-font-m"
                  to={`/${link.key}`}
                >
                  {link.name}
                </Link>
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
