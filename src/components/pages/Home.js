import React, { Component } from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Topping } from '../';

const left = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg1 ms-u-xl1 ms-u-xxl2";
const inner = "ms-Grid-col ms-u-sm12 ms-u-md10 ms-u-lg8 ms-u-xl7 ms-u-xxl5";
const right = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg3 ms-u-xl4 ms-u-xxl5";

export class Home extends Component {
    render () {
        return (
            <div className="ms-Grid-row">
                <Topping title="Home" icon="home" />
                <div className={left}></div>

                <div className={inner}>
                    <div className="ms-font-xl">
                        <p>
                            Hello, my name is Chris. Here are some facts about me:</p>
                        <ul>
                            <li>I work at Macys Merchandising Group as a SharePoint Developer</li>
                            <li>I make business applications in SharePoint with a heavy emphasis on custom code and re-usable solutions</li>
                            <li>Some of my other interests include, but are not limited to:
                        <ul>
                                    <li><Link href="">SharePoint Framework</Link></li>
                                    <li><Link href="https://www.nintex.com/">Nintex Workflows</Link></li>
                                    <li><Link href="http://jquery.com/">jQuery</Link></li>
                                    <li><Link href="https://facebook.github.io/react/">React</Link></li>
                                    <li><Link href="https://nodejs.org/en/">NodeJS</Link> &amp; <Link href="https://www.npmjs.com/">npm</Link></li>
                                    <li><Link href="http://dev.office.com/fabric#/components">Fabric UI</Link></li>
                                    <li><Link href="https://leanpub.com/understandinges6/read">ECMAScript 6</Link></li>
                                    <li><Link href="https://www.python.org/">Python</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={right}></div>
            </div> /* end ms-Grid-row */
        );
    }
}