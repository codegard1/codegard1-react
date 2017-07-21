import React, { Component } from "react";
import * as T from "prop-types";
import { Nav } from "office-ui-fabric-react/lib/Nav";
import { Link } from "office-ui-fabric-react/lib/Link";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

/* custom stuff */
import * as fabric from "./fabricStyles";
import * as Pages from "./pageContent";

const BasePage = props => <Fabric>{props.children}</Fabric>;

export class Page extends Component {
  render() {
    const leftCol = fabric.left;
    const rightCol = fabric.right;

    const pageContent = (
      <BasePage {...this.props}>{Pages[this.props.page]}</BasePage>
    );

    const NavDefinition = [
      {
        name: "Pages",
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
          }
        ]
      }
    ];

    return (
      <div className="ms-Grid-row">
        <div className={leftCol}>
          {pageContent}
        </div>
        <div className={rightCol}>
          <Nav
            groups={NavDefinition}
            onRenderLink={link => [
              <span key={"navItem-" + link.name} className="ms-font-m">
                <Link>{link.name}</Link>
              </span>
            ]}
            isOnTop={false}
            onLinkClick={this.props._onNavLinkClicked}
            selectedKey={this.props.page}
            initialSelectedKey={"home"}
          />
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  page: T.string.isRequired,
  color: T.string.isRequired,
  _changeColor: T.func.isRequired,
  _onNavLinkClicked: T.func,
  _onShowMenuClicked: T.func,
  _onCalloutDismis: T.func,
  isCalloutVisible: T.bool
};

export default Page;
