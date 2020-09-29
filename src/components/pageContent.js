import React from "react";

/* custom stuff */
import Table from "./blackjack/Table";

export const NavDefinition = [
  {
    links: [
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
