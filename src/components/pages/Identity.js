import React, { Component } from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Topping } from '../';
import * as fabric from '../fabricStyles';

export class Identity extends Component {
    render () {
        let leftCol = fabric.left;
        let innerCol = fabric.inner;
        let rightCol = fabric.right;

        return (
            <div className="ms-Grid-row">
                <Topping title="Identity" icon="Contact" />
                <div className={leftCol}></div>

                <div className={innerCol}>
                    <div className="ms-font-xl">
                        <p>Email: <Link href="mailto:c.odegard@gmail.com">c.odegard[at]gmail.com</Link></p>
                        <p>
                            Here are some links to other internet-based websites where I take residence:</p>
                        <ul>
                            <li>I have a <Link href="https://www.linkedin.com/in/codegard1">LinkedIn profile</Link></li>
                            <li>I have a <Link href="https://github.com/codegard1">GitHub profile</Link></li>
                            <li>I use <Link href="https://jsfiddle.net/user/codegard1/">JSFiddle</Link> and sometimes <Link href="http://plnkr.co/users/codegard1">Plunker</Link>              to test ideas</li>
                            <li>I used to make a lot of electronic music in college, and many of those songs can be found on my <Link href="https://soundcloud.com/ciaervo">SoundCloud profile</Link></li>
                            <li>As if that weren't enough, I also have a <Link href="http://twitter.com/codegard1">Twitter</Link> account that I don't use very often</li>
                        </ul>
                    </div>
                </div>

                <div className={rightCol}></div>
            </div> /* end ms-Grid-row */
        );
    }
}