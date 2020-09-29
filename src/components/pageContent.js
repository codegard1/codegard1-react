import React from "react";

/* custom stuff */
import Table from "./blackjack/Table";

// Home page component
const home = (
  <div id="Home">
    <h1 className="ms-font-su">Hello, world!</h1>
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
      },
      {
        category: "Pages",
        iconProps: {
          iconName: "CrownSolid"
        },
        key: "blackjack",
        name: "Blackjack",
        content: <Table />
      }
    ]
  }
];
