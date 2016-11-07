var React = require('react');
import { Topping } from './MyComponents';

var Page1 = React.createClass({
    render: function () {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm1 ms-u-md1 ms-u-lg1">&nbsp;</div>

                <div className="ms-Grid-col ms-u-sm10 ms-u-md8 ms-u-lg7">
                    <div className="ms-font-xl">
                        <p>
                            Hello, my name is Chris. Here are some facts about me:</p>
                        <ul>
                            <li>I work at Macys Merchandising Group as a SharePoint Developer</li>
                            <li>I make business applications in SharePoint with a heavy emphasis on custom code and re-usable solutions</li>
                            <li>Some of my other interests include, but are not limited to:
                                <ul>
                                    <li>Nintex Workflows</li>
                                    <li>jQuery</li>
                                    <li>React</li>
                                    <li>ECMAScript 6</li>
                                    <li>NodeJS</li>
                                    <li>Python</li>
                                    <li>Fabric UI</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <Topping title="Identity" icon="contact" />

                    <div className="ms-font-xl">
                        <p>
                            Email: c[period]odegard[saturn]gmail[fullstop]com
                        </p>
                        <p>
                            Here are some links to other online internet websites where I take residence:
                            <ul>
                                <li>I have a <a href="https://www.linkedin.com/in/codegard1">LinkedIn profile</a></li>
                                <li>I have a <a href="https://github.com/codegard1">GitHub profile</a></li>
                                <li>I use <a href="https://jsfiddle.net/user/codegard1/">JSFiddle</a> and sometimes <a href="http://plnkr.co/users/codegard1">Plunker</a>              to test ideas</li>
                                <li>I used to make a lot of electronic music in college, and many of those songs can be found on my <a href="https://soundcloud.com/ciaervo">SoundCloud profile</a></li>
                            </ul>
                        </p>
                    </div>

                    <Topping title="Current Projects" icon="heartEmpty" />

                    <div className="ms-font-l">
                        <p>
                            Here is a sampling of what I am actively working on:</p>
                        <ul>
                            <li>Using <a href="http://datatables.net/">Datatables</a> to display SharePoint List data in an on-premise Site Collection.</li>
                            <li>Embedding a Yammer feed in an on-premise SharePoint page, using single sign-on</li>
                            <li>Getting used to the <a href="https://github.com/petehunt/react-howto">React ecosystem</a>, with the intention
                        of using the framework to create modular forms within SharePoint pages, obviating some of our dependence on
                        <a href="http://www.nintex.com/">Nintex Forms</a></li>
                            <li>Expanding this site</li>
                        </ul>
                    </div>
                </div>

                <div className="ms-Grid-col ms-u-sm1 ms-u-md3 ms-u-lg4">&nbsp;</div>
            </div>
        );
    }
});

module.exports = Page1;