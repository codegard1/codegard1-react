import React, { Component } from 'react';
import { fabricColor, colorSuffix } from '../fabricStyles';
import { learningLog2016 } from './learningLog2016'; 

// TODO: import this!
/*var learningLog2016 = [
    {
        "date": "12/25/2016",
        "work": ["Learned about ES6 Arrow functions and variable declaration keywords "],
        "notes": ["See Rapid E6 Training"],
    }, {
        "date": "12/22/2016",
        "work": ["Learned about TypeScript on Pluralsight"],
        "notes": ["See TypeScript Pluralsight Notes"],
    }, {
        "date": "12/14/2016",
        "work": ["Watched a webinar at work about SharePoint framework"],
        "notes": ["See Converting your CEWP Customizations to the SharePoint Framework"],
    }, {
        "date": "12/13/2016",
        "work": ["Read about modules in different versions of JS"],
        "notes": ["See Modules in ECMAScript"],
    }, {
        "date": "12/12/2016",
        "work": ["Continued the Learning React II Course on Codecademy",
            "Learned about functional stateless components",
            "Learned about PropTypes"
        ],
        "notes": ["See Learn ReactJS II Notes p3",
            "See Should I use React.createClass, ES6 Classes or stateless functional components?"
        ],
    }, {
        "date": "12/11/2016",
        "work": ["Spent some time optimizing codegard1-react",
            "I experimented with import/export and using index.js to make nested components more accessible"
        ],
        "notes": ["See Commit log "],
    }, {
        "date": "12/8/2016",
        "work": ["Continued the Learning React II Course on Codecademy",
            "Learned about using styles in React components"
        ],
        "notes": ["See Learn React II Notes"],
    }, {
        "date": "12/6/2016",
        "work": ["Started Learning React II on Codecademy",
            "Learned about Setting state from Parent, Child, and Sibling components"
        ],
        "notes": ["See Learn React II Notes"],

    }, {
        "date": "12/5/2016",
        "work": ["Finished the react course on Codecademy "],
        "notes": ["See Learn ReactJS: Part 2 Notes (Codecademy)"],
    }, {
        "date": "12/1/2016",
        "work": ["Learned a bit more about Netlify"],
    }, {
        "date": "11/29/2016",
        "work": ["Continued learning about how to use Jade",
            "Learned about Handlebars"
        ],
        "notes": ["See Templating Engines"],
    }, {
        "date": "11/28/2016",
        "work": ["Learned a bit about the jade (AKA Pug) templating engine from Pluralsight"],
        "notes": ["See Templating Engines"],
    }, {
        "date": "11/22/2016",
        "work": ["Learned about jshint "],
        "notes": ["See jshint Info"],
    }, {
        "date": "11/21/2016",
        "work": ["Started NPM course on web development using Node.js",
            "Learned about gulp"
        ],
        "notes": ["See page Building Web Applications with Node.js & Express 4.0"],
    }, {
        "date": "11/14/2016",
        "work": ["Finished the NPM Playbook course on Pluralsight"],
        "notes": ["See Page NPM Playbook 3: Publishing your own packages"],
    }, {
        "date": "11/13/2016",
        "work": ["Finished Codecademy course on props in React"],
    }, {
        "date": "11/10/2016",
        "work": ["Read Understanding module.exports and exports in Node.js",
            "Read about React State",
            "Learned about State Lifting",
            "Fixed the page switching function in codegard1-react"
        ],
    }, {
        "date": "11/7/2016",
        "work": ["Continued ReactJS course on Codecademy and completed the unit on JSX"],
        "notes": ["See page: React Codecademy Course Notes",
            "See Page: Learn ReactJS: Part 2 Notes (Codecademy)"
        ],
    }, {
        "date": "11/4/2016",
        "work": ["Completed Learn ReactJS: Part I on CodeCademy"],
        "notes": ["See page: React Codecademy Course Notes"],
    }, {
        "date": "10/30/2016",
        "work": ["Went to a Hacker Hours meetup at Gregory's coffe on 7th ave & 30th and talked to a couple of guys there, Jamie & Sam, who were studying React in a Bootcamp & who were able to give me a brief rundown of how React apps are structured, w/r/t Components, state, and props. They advised me too to look at React tutorials on Codecademy & nodeschool",
            "Started reading the thinking-in-react guide"
        ],
        "notes": ["See page: Thinking-in-react"],
    }, {
        "date": "10/27/2016",
        "work": ["Watched NPM course on Pluralsight",
            "Learned a little bit about how to use Next.js",
            "Learned more about gitignore files & how to unstage files from a commit"
        ],
        "notes": ["See page: NPM Playbook part 2",
            "See page: Next.js README.md",
            "See page: How to unstage files in a git repository"
        ],
    }, {
        "date": "10/26/2016",
        "work": ["Watched ShareGate webinar re: the future of SharePoint",
            "Read about next.js"
        ],
    }, {
        "date": "10/24/2016",
        "work": ["Completed NodeJS course on Pluralsight",
            "Started NPM course on Pluralsight",
            "Learned about NPM install options",
            "Learned about gitignore files"
        ],
        "notes": ["See page Introduction to NodeJS Part 8 ",
            "See Page NPM Playbook ",
            "See page NPM Install Dcumentation"
        ],
    }, {
        "dat]e": "10/19/2016",
        "work": ["MS Ignite Deck: Build Business Apps for O365 - InfoPath, PowerApps, Flow, and More"],
    }, {
        "date": "10/18/2016",
        "work": ["NodeJS Pluralsight Course: Unit Testing",
            "Read about NodeJS package.json",
            "Learned about where NodeJS installs packages locally vs. globally "
        ],
        "notes": ["See page Introduction to NodeJS Part 7"],
    }, {
        "date": "10/17/2016",
        "work": ["Decks from MS Ignite 2016: ",
            "Ultimate Field Guide to O365 Groups",
            "SharePoint Document Libraries",
            "Discover What's new and what's coming to SharePoint Modern Team Sites",
            "NodeJS Pluralsight course: Interacting with the Web section"
        ],
        "notes": ["See page: Introduction to NodeJS part 6"],
    }, {
        "date": "10/13/2016",
        "work": ["Participated in a 3hr Presentation Skills workshop hosted by HR"],
    }, {
        "date": "10/12/2016",
        "work": ["Participated in webinar: Is Innovative Mentoring for You?",
            "Watched webinar: Macy's Save Actively Financial Wellness Series Millenials and financial matters",
            "Watched two chapters in the NodeJS Pluralsight Course, topics were File System and  Buffers"
        ],
    }, {
        "date": "10/4/2016",
        "work": ["Watched a few modules on PluralSight regarding NodeJS Events & Streams ",
            "Events are emitted & consumed by objects",
            "A callback is just a function that runs after a method has finished evaluating "
        ],
        "notes": ["See page (Pluralsight) NodeJS Streams",
            "See page (Pluralsight) NodeJS Events"
        ],
    }, {
        "date": "10/3/2016",
        "work": ["Read article on Arrow functions and did some experimenting on ES6Fiddle.net",
            "Read article on Linting "
        ],
    }, {
        "date": "9/26/2016",
        "work": ["Sat with Bobby as he explained how to use the SharePoint framework CLI tools",
            "Learned how to scaffold from @microsoft/generator; see this page for more info",
            "Watched some videos in the Modules, require(), and NPM chapter of the NodeJS Pluralsight course"
        ],
    }, {
        "date": "9/22/2016",
        "work": ["PnP video re: SharePoint Framework",
            "Learned about npm"
        ],
    }, {
        "date": "9/21/2016",
        "work": "Read Grokking Scope in JavaScript"
    }
];*/

let divStyles = {
    borderTop: '1px solid #eee',
    overflowX: 'hidden'
};

var logArrayProcessed = learningLog2016.map(value => {
    return React.createElement('h5', { key: value.key, className: "ms-font-m" }, `Date: ${value.date}`,
        React.createElement('p', { className: "ms-font-m" }, `Work: ${value.work === undefined ? 'none' : value.work}`),
        React.createElement('p', { className: "ms-font-m" }, `Notes: ${value.notes === undefined ? 'none' : value.notes}`)
    );
});

export class FabricList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return <div style={divStyles}>
            <h3>Learning Log 2016</h3>
            <ul>
                {logArrayProcessed}
            </ul>
        </div>
    }
}