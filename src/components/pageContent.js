import React from "react";
import { Link } from "office-ui-fabric-react/lib/Link";

/* custom stuff */
import { Experiments } from "./Experiments";
import { LearningLog } from "./LearningLog";
import Table from "./blackjack/Table";

/* react-markdown */
import ReactMarkdown from "react-markdown";

const markdowntest = <ReactMarkdown source={"# Hello, World!"} />;

const home = (
  <div className="ms-font-xl">
    <p>Hello, my name is Chris. Here are some facts about me:</p>
    <ul>
      <li>
        I work for <Link href="http://ramsa.com">RAMSA</Link> as a SharePoint
        Developer
      </li>
      <li>
        I make business applications in SharePoint with a heavy emphasis on
        custom code and re-usable solutions.
      </li>
      <li>
        Some of my other interests include, but are not limited to:
        <ul>
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
      </li>
    </ul>
  </div>
);

const identity = (
  <div className="ms-font-xl">
    <p>
      Email:{" "}
      <Link href="mailto:c.odegard@gmail.com">c.odegard[at]gmail.com</Link>
    </p>
    <p>
      Here are some links to other internet-based websites where I take
      residence:
    </p>
    <ul>
      <li>
        I have a{" "}
        <Link href="https://www.linkedin.com/in/codegard1">
          LinkedIn profile
        </Link>
      </li>
      <li>
        I have a <Link href="https://github.com/codegard1">GitHub profile</Link>
      </li>
      <li>
        I use <Link href="https://jsfiddle.net/user/codegard1/">JSFiddle</Link>{" "}
        sometimes
      </li>
      <li>
        I used to make a lot of electronic music in college, and many of those
        songs can be found on my{" "}
        <Link href="https://soundcloud.com/ciaervo">SoundCloud profile</Link>
      </li>
      <li>
        As if that weren't enough, I also have a{" "}
        <Link href="http://twitter.com/codegard1">Twitter</Link> account that I
        don't use very often
      </li>
    </ul>
  </div>
);

const projects = (
  <div className="ms-font-xl">
    <p>Here is a sampling of what I'm doing now (3/8/2018):</p>
    <ul>
      <li>
        Building a pseudo-CRM in SharePoint, integrating data from Deltek with
        BDCS
      </li>
      <li>
        Learning the back-end of server management by building my own server at
        home
      </li>
      <li>Still trying to add pizzazz to this site</li>
      <li>
        Writing PowerShell scripts to copy large amounts of data into the Term
        Store
      </li>
      <li>Learning how to use the Sqlite3 npm package</li>
      <li>Trying to learn TypeScript</li>
    </ul>
  </div>
);

const experiments = <Experiments />;

const learninglog = <LearningLog />;

const blackjack = <Table />;

export const NavDefinition = [
  {
    links: [
      {
        category: "Pages",
        iconProps: { iconName: "Home" },
        key: "home",
        name: "Home",
        content: home
      },
      {
        category: "Pages",
        iconProps: { iconName: "Identity" },
        key: "identity",
        name: "Identity",
        content: identity
      },
      {
        category: "Pages",
        iconProps: { iconName: "Projects" },
        key: "projects",
        name: "Projects",
        content: projects
      },
      {
        category: "Pages",
        iconProps: { iconName: "Experiments" },
        key: "experiments",
        name: "Experiments",
        content: experiments
      },
      {
        category: "Pages",
        iconProps: { iconName: "Log" },
        key: "learninglog",
        name: "Learning Log",
        content: learninglog
      },
      {
        category: "Pages",
        iconProps: { iconName: "Blackjack" },
        key: "blackjack",
        name: "Blackjack",
        content: blackjack
      },
      {
        category: "Pages",
        iconProps: { iconName: "Yes" },
        key: "markdowntest",
        name: "Markdown Test",
        content: markdowntest
      }
    ]
  }
];
