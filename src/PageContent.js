var React = require('react');
import { Topping } from './MyComponents';
import { Link } from 'office-ui-fabric-react/lib/Link';

var Page1 = React.createClass({
    getInitialState: function () {
        return { page: 'home' };
    },
    render: function () {
        var left = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg1 ms-u-xl1 ms-u-xxl2";
        var inner = "ms-Grid-col ms-u-sm12 ms-u-md10 ms-u-lg8 ms-u-xl7 ms-u-xxl5";
        var right = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg3 ms-u-xl4 ms-u-xxl5";
        
        switch (this.state.page) {
            case 'home':
                return (
                    <div className="ms-Grid-row">
                        <div className={left}>&nbsp;</div>

                        <div className={inner}>
                            <Topping title="Home" icon="home" />
                            <div className="ms-font-xl">
                                <p>
                                    Hello, my name is Chris. Here are some facts about me:</p>
                                <ul>
                                    <li>I work at Macys Merchandising Group as a SharePoint Developer</li>
                                    <li>I make business applications in SharePoint with a heavy emphasis on custom code and re-usable solutions</li>
                                    <li>Some of my other interests include, but are not limited to:
                                        <ul>
                                            <li>SharePoint Framework</li>
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

                        </div>
                        <div className={right}>&nbsp;</div>
                    </div> /* end ms-Grid-row */
                );
                // eslint-disable-next-line
                break;

            case 'identity':
                return (
                    <div className="ms-Grid-row">
                        <div className={left}>&nbsp;</div>

                        <div className={inner}>
                            <Topping title="Identity" icon="contact" />
                            <div className="ms-font-xl">
                                <p>Email: c.odegard[at]gmail.com</p>
                                <p>
                                    Here are some links to other online internet websites where I take residence:
                                    <ul>
                                        <li>I have a <Link href="https://www.linkedin.com/in/codegard1">LinkedIn profile</Link></li>
                                        <li>I have a <Link href="https://github.com/codegard1">GitHub profile</Link></li>
                                        <li>I use <Link href="https://jsfiddle.net/user/codegard1/">JSFiddle</Link> and sometimes <Link href="http://plnkr.co/users/codegard1">Plunker</Link>              to test ideas</li>
                                        <li>I used to make a lot of electronic music in college, and many of those songs can be found on my <Link href="https://soundcloud.com/ciaervo">SoundCloud profile</Link></li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div className={right}>&nbsp;</div>
                    </div> /* end ms-Grid-row */
                );
                // eslint-disable-next-line
                break;

            case 'projects':
                return (
                    <div className="ms-Grid-row">
                        <div className={left}>&nbsp;</div>

                        <div className={inner}>
                            <Topping title="Current Projects" icon="heartEmpty" />
                            <div className="ms-font-xl">
                                <p>
                                    Here is a sampling of what I am actively working on:</p>
                                <ul>
                                    <li>Using <Link href="http://datatables.net/">Datatables</Link> to display SharePoint List data in an on-premise Site Collection.</li>
                                    <li>Embedding a Yammer feed in an on-premise SharePoint page, using single sign-on</li>
                                    <li>Getting used to the <Link href="https://github.com/petehunt/react-howto">React ecosystem</Link>, with the intention
                                of using the framework to create modular forms within SharePoint pages, obviating some of our dependence on
                                <Link href="http://www.nintex.com/">Nintex Forms</Link></li>
                                    <li>Expanding this site</li>
                                </ul>
                            </div>
                        </div>

                        <div className={right}>&nbsp;</div>
                    </div> /* end ms-Grid-row */
                );
                // eslint-disable-next-line
                break;

            default:
                return <div>No content</div>;
        }
    }
});

module.exports = Page1;