import React from "react";
import { Link } from "office-ui-fabric-react/lib/Link";

/* custom stuff */
import { Experiments } from "./Experiments";
import { LearningLog } from "./LearningLog";

export const home = (
  <div className="ms-font-xl">
    <p>Hello, my name is Chris. Here are some facts about me:</p>
    <ul>
      <li>
        I work for <Link href="http://macys.com">Macy's</Link> as a SharePoint
        Developer
      </li>
      <li>
        I make business applications in SharePoint with a heavy emphasis on
        custom code and re-usable solutions
      </li>
      <li>
        Some of my other interests include, but are not limited to:
        <ul>
          <li>SSDT</li>
          <li>
            <Link href="http://powerbi.microsoft.com">Power BI</Link>
          </li>
          <li>
            <Link href="https://nodejs.org/en/">NodeJS</Link>
            {" & "}
            <Link href="https://www.npmjs.com/">npm</Link>
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
            <Link href="https://powerbi.microsoft.com/en-us/">Power BI</Link>
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

export const identity = (
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
        I use <Link href="https://jsfiddle.net/user/codegard1/">
          JSFiddle
        </Link>{" "}
        and sometimes{" "}
        <Link href="http://plnkr.co/users/codegard1">Plunker</Link> to test
        ideas
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

export const projects = (
  <div className="ms-font-xl">
    <p>Here is a sampling of what I'm doing now:</p>
    <ul>
      <li>
        Building{" "}
        <Link href="https://github.com/codegard1/blackjack/">
          my own version of blackjack
        </Link>{" "}
        using React, Fabric, Masonry, and{" "}
        <Link href="https://github.com/troygoode/node-shuffle">
          node-shuffle
        </Link>
      </li>
      <li>
        Working with Gatekeepers and business owners to migrate sites and
        content from an older site collection (SP 2013) to the new one (SP 2016)
      </li>
      <li>
        Getting used to the{" "}
        <Link href="https://github.com/petehunt/react-howto">
          React ecosystem
        </Link>
        , with the intention of using the framework to create modular forms
        within SharePoint pages, obviating some of our dependence on
        <Link href="http://www.nintex.com/">Nintex Forms</Link>
      </li>
      <li>
        Adding{" "}
        <Link href="http://etymonline.com/index.php?allowed_in_frame=0&search=pizzazz">
          pizzazz
        </Link>{" "}
        to this site
      </li>
    </ul>
  </div>
);

export const experiments = <Experiments />;

export const learninglog = <LearningLog />;
