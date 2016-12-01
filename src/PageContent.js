import React, { Component } from 'react';
import { Topping} from './MyComponents';
import { Link } from 'office-ui-fabric-react/lib/Link';

class Experimental extends Component {
    render () {
        return (
            <div className="ms-font-xl">
            <p>Yo World</p>
            </div>
        )
    } // end render()
}

class Home extends Component {
    render () {
        return (
            <div className={this.props.className}>
                <Topping title="Home" icon="home" />
                <div className="ms-font-xl">
                    <p>
                        Hello, my name is Chris. Here are some facts about me:</p>
                    <ul>
                        <li>I am a SharePoint Developer at Macy's</li>
                        <li>I make business applications in SharePoint with a lot of custom code</li> 
                        <li>I prefer to make re-usable solutions</li>
                        <li>Some of my other interests include, but are not limited to:
                            <ul>
                                <li>ES6 6</li>
                                <li>NodeJS</li>
                                <li>Fabric UI</li>
                                <li>React</li>
                                <li>SharePoint Framework</li>
                                <li>Nintex Workflows</li>
                                <li>jQuery</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

class Identity extends Component {
    render () {
        return (
            <div className={this.props.className}>
            <Topping title="Identity" icon="contact" />
                            <div className="ms-font-xl">
                                <p>Email: <Link href="mailto:c.odegard@gmail.com">c.odegard[at]gmail.com</Link></p>
                                <p>
                                    Here are some links to other online internet websites where I take residence:
                                    <ul>
                                        <li>I have a <Link href="https://www.linkedin.com/in/codegard1">LinkedIn profile</Link></li>
                                        <li>I have a <Link href="https://github.com/codegard1">GitHub profile</Link></li>
                                        <li>I use <Link href="https://jsfiddle.net/user/codegard1/">JSFiddle</Link> and sometimes <Link href="http://plnkr.co/users/codegard1">Plunker</Link> to test ideas</li>
                                        <li>I used to make a lot of electronic music, and many of those songs can be found on my <Link href="https://soundcloud.com/ciaervo">SoundCloud profile</Link></li>
                                        <li>As if that weren't enough, I also have a <Link href="http://twitter.com/codegard1">Twitter</Link> account that I don't use very often</li>
                                    </ul>
                                </p>
                            </div>
            </div>
        )
    }
}

class Projects extends Component {
    render () {
        return (
            <div className={this.props.className}>
            <Topping title="Current Projects" icon="heartEmpty" />
                            <div className="ms-font-xl">
                                <p>
                                    Here is a sampling of what I am actively working on:</p>
                                <ul>
                                    <li>Using <Link href="http://datatables.net/">Datatables</Link> to display SharePoint List data</li>
                                    <li>Embedding a Yammer feed in an on-premise SharePoint page, using single sign-on</li>
                                    <li>Getting used to the <Link href="https://github.com/petehunt/react-howto">React ecosystem</Link>, with the intention
                                of using the framework to create modular forms within SharePoint pages, lessening dependence on 
                                <Link href="http://www.nintex.com/">Nintex Forms</Link></li>
                                    <li>Making this site more of a web application</li>
                                </ul>
                            </div>
            </div>
        )
    }
}

module.exports = {
    Experimental,
    Home,
    Projects,
    Identity
}