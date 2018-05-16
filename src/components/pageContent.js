import React from "react";
import {Link} from "office-ui-fabric-react/lib/Link";
import {Icon} from "office-ui-fabric-react/lib/Icon";
/* custom stuff */
// import {Experiments} from "./Experiments";
import {LearningLog} from "./LearningLog";
import Table from "./blackjack/Table";

/* react-markdown */
import ReactMarkdown from "react-markdown";
import Document from "./../blog/2018-27-3";

const blog = (<ReactMarkdown
  source={Document}
  renderers={{
  paragraph: props => <p className="ms-font-l">{props.children}</p>
}}/>);

const home = (
  <div id="Home">

    <h1 className="ms-font-su">Hello, I'm Chris</h1>

    <ul className="ms-font-xl">
      <li>
        I'm a SharePoint Developer at &nbsp;
        <Link href="http://ramsa.com">RAMSA</Link>.
      </li>
      <li>
        I make business applications in SharePoint with a heavy emphasis on custom code
        and re-usable solutions.
      </li>
    </ul>

    <h1 className="ms-font-su">Contact Me</h1>
    <p className="ms-font-xl">
      By Email:{" "}
      <Link href="mailto:c.odegard@gmail.com">c.odegard[at]gmail.com</Link>
      <br/>
      Or find me on these sites:&nbsp;&nbsp;
      <Link href="https://www.linkedin.com/in/codegard1">
        <Icon
          style={{
          marginRight: "8px"
        }}
          iconName="LinkedInLogo"
          aria-hidden="true"
          title="LinkedIn"/>
        LinkedIn
      </Link>
      &nbsp;&nbsp;
      <Link href="https://github.com/codegard1">
        <Icon
          style={{
          marginRight: "8px"
        }}
          iconName="GitFork"
          aria-hidden="true"
          title="GitHub"/>
          Github
          </Link>&nbsp;&nbsp;
      <Link href="https://jsfiddle.net/user/codegard1/">JSFiddle</Link>&nbsp;&nbsp;
    </p>

    <h1 className="ms-font-su">Projects</h1>
    <p className="ms-font-xl">This is what I'm doing currently:</p>
    <ul className="ms-font-xl">
      <li>
        Building a CRM system in SharePoint, integrating Deltek Vision with BDCS, and
        making extensive use of the Term Store
      </li>
      <li>
        Learning server management by building my own server at home
      </li>
      <li>Still trying to add pizzazz to this site</li>
      <li>
        Writing lots of PowerShell scripts to automate moving data in SharePoint
      </li>
      <li>Still trying to
        <em>try</em>
        to learn TypeScript</li>
    </ul>
    <p className="ms-font-xl">Some of my other interests include, but are not limited to:</p>
    <ul className="ms-font-xl">
      <li>PowerShell</li>
      <li>Knowledge Management</li>
      <li>
        <Link href="http://powerbi.microsoft.com">Power BI</Link>
      </li>
      <li>
        <Link href="https://nodejs.org/en/">NodeJS</Link>
      </li>
      <li>
        <Link href="https://facebook.github.io/react/">React</Link>
      </li>
      <li>
        <Link href="http://dev.office.com/fabric#/components">
          Fabric UI
        </Link>
      </li>
      <li>
        <Link href="">SharePoint Framework</Link>
      </li>
      <li>
        <Link href="https://www.nintex.com/">Nintex Workflows</Link>
      </li>
      <li>
        <Link href="http://jquery.com/">jQuery</Link>
      </li>
      <li>
        <Link href="https://leanpub.com/understandinges6/read">ES6</Link>
      </li>
    </ul>
  </div>
);

export const NavDefinition = [
  {
    links: [
      {
        category: "Pages",
        iconProps: {
          iconName: "Home"
        },
        key: "home",
        name: "Home",
        content: home
      }, {
        category: "Pages",
        iconProps: {
          iconName: "BulletedList"
        },
        key: "learninglog",
        name: "Learning Log",
        content: <LearningLog/>
      }, {
        category: "Pages",
        iconProps: {
          iconName: "Articles"
        },
        key: "blog",
        name: "Web Log",
        content: blog
      }, {
        category: "Pages",
        iconProps: {
          iconName: "CrownSolid"
        },
        key: "blackjack",
        name: "Blackjack",
        content: <Table/>
      }
    ]
  }
]