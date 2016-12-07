import React, { Component } from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { Button } from 'office-ui-fabric-react/lib/Button';

class Heading extends Component{
    handleChange (options) {
        this.props.changePage(options.key);
    }

    render () {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm6 ms-u-md8 ms-u-lg9 ms-u-xl10 header">
                    <span className="ms-font-su ms-fontColor-tealDark ms-u-fadeIn400">
                        <strong>codegard1</strong>
                    </span>
                </div>
                <div className="ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg3 ms-u-xl2 header">
                    <Dropdown
                        label=''
                        options={[
                                { key: 'home', text: 'Home' },
                                { key: 'identity', text: 'Identity' },
                                { key: 'projects', text: 'Projects' },
                                { key: 'experimental', text: 'Experimental' }
                            ]}
                        selectedKey={this.props.selectedKey}
                        onChanged={this.handleChange.bind(this)}
                        />
                </div>
            </div>
        );

    }
};

class HorizontalBar extends Component {
    render () {
        return (
            <div className="ms-Grid-row ms-bgColor-teal">
                <div className="ms-Grid-col ms-u-sm12"></div>
            </div>
        );
    }
};

class Topping extends Component {
    render () {
        var icon = this.props.icon;
        var title = this.props.title;
        return (
            <div className="ms-Grid-row ms-bgColor-tealLight topping">
                <div className="ms-Grid-col ms-u-sm12">
                    <span className="ms-font-xxl ms-fontColor-tealDark">
                        {title} &nbsp;
                        <i className={"ms-Icon ms-Icon--" + icon}></i>
                    </span>
                </div>
            </div>
        );
    }
};

/*interface ICalloutState {
    isCalloutVisible?: boolean;
}*/

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCalloutVisible: false
        };
        
        this._onShowMenuClicked = this._onShowMenuClicked.bind(this);
        this._onCalloutDismiss = this._onCalloutDismiss.bind(this);
    }

    render () {
        let isCalloutVisible = this.state.isCalloutVisible;

        const left = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg1 ms-u-xl1 ms-u-xxl2";
        const inner = "ms-Grid-col ms-u-sm12 ms-u-md10 ms-u-lg8 ms-u-xl7 ms-u-xxl5";
        const right = "ms-Grid-col ms-u-hiddenSm ms-u-md1 ms-u-lg3 ms-u-xl4 ms-u-xxl5";

        switch (this.props.page) {
            case 'home':
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
                // eslint-disable-next-line
                break;

            case 'identity':
                return (
                    <div className="ms-Grid-row">
                    <Topping title="Identity" icon="contact" />
                        <div className={left}></div>

                        <div className={inner}>
                            <div className="ms-font-xl">
                                <p>Email: <Link href="mailto:c.odegard@gmail.com">c.odegard[at]gmail.com</Link></p>
                                <p>
                                    Here are some links to other internet-based websites where I take residence:
                                    <ul>
                                        <li>I have a <Link href="https://www.linkedin.com/in/codegard1">LinkedIn profile</Link></li>
                                        <li>I have a <Link href="https://github.com/codegard1">GitHub profile</Link></li>
                                        <li>I use <Link href="https://jsfiddle.net/user/codegard1/">JSFiddle</Link> and sometimes <Link href="http://plnkr.co/users/codegard1">Plunker</Link>              to test ideas</li>
                                        <li>I used to make a lot of electronic music in college, and many of those songs can be found on my <Link href="https://soundcloud.com/ciaervo">SoundCloud profile</Link></li>
                                        <li>As if that weren't enough, I also have a <Link href="http://twitter.com/codegard1">Twitter</Link> account that I don't use very often</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div className={right}></div>
                    </div> /* end ms-Grid-row */
                );
                // eslint-disable-next-line
                break;

            case 'projects':
                return (
                    <div className="ms-Grid-row">
                        <Topping title="Current Projects" icon="heartEmpty" />
                        <div className={left}></div>

                        <div className={inner}>
                            <div className="ms-font-xl">
                                <p>
                                    Here is a sampling of what I'm doing now:</p>
                                <ul>
                                    <li>Working with Gatekeepers and business owners to migrate sites and content from an older site collection (SP 2013) to the new one (SP 2016)</li>
                                    <li>Learning how to use <Link href="http://gulpjs.com/">Gulp</Link> to automate routine dev processes</li>
                                    <li>Developing a volunteer opportunities signup application for internal use</li>
                                    <li>Using <Link href="http://datatables.net/">Datatables</Link> to display SharePoint List data in an on-premise Site Collection</li>
                                    <li>Getting used to the <Link href="https://github.com/petehunt/react-howto">React ecosystem</Link>, with the intention
                                of using the framework to create modular forms within SharePoint pages, obviating some of our dependence on
                                <Link href="http://www.nintex.com/">Nintex Forms</Link></li>
                                    <li>Adding <Link href="http://etymonline.com/index.php?allowed_in_frame=0&search=pizzazz">pizzazz</Link> to this site</li>
                                </ul>
                            </div>
                        </div>

                        <div className={right}></div>
                    </div> /* end ms-Grid-row */
                );
                // eslint-disable-next-line
                break;

            case 'experimental':
                
                return (
                    <div className="ms-u-slideRightIn40 ms-Grid-row">
                    <Topping title="Experimental" icon="circle" />
                        <div className={left}></div>

                        <div className={inner}>
                            <div className="ms-font-xl" ref={ (calloutTarget) => this._menuButtonElement = calloutTarget }>
                                <p>Fabric UI Callout Example</p>
                                <p>isCalloutVisible? : {JSON.stringify(isCalloutVisible)}</p> 
                                <p>
                                    <Button onClick={this._onShowMenuClicked}>
                                        { isCalloutVisible ? 'Hide Callout' : 'Show Callout' }
                                        </Button>
                                    </p>
                                
                                                           

                                { isCalloutVisible && (
                                <Callout
                                    className="chris-Callout"
                                    targetElement={ this._menuButtonElement }
                                    onDismiss={ this._onCalloutDismiss }
                                    setInitialFocus={ true }
                                    >
                                    <div className='chris-Callout-header'>
                                        <p className='chris-Callout-title'>
                                            All of your favorite people
                                        </p>
                                    </div>
                                    <div className='chris-Callout-inner'>
                                        <div className='chris-Callout-content'>
                                            <p className='chris-Callout-subText'>
                                            Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.
                                            </p>
                                        </div>
                                        <div className='chris-Callout-actions'>
                                            <Link className='chris-Callout-link' href='http://microsoft.com'>Go to microsoft</Link>
                                        </div>
                                    </div>
                                </Callout>
                                ) }
                            </div>
                        </div>

                        <div className={right}></div>
                    </div>
                );
                // eslint-disable-next-line
                break;
            case 'experimental1':
                return (
                    <div className="ms-u-slideRightIn40 ms-Grid-row">
                    <Topping title="Experimental" icon="circle" />
                        <div className={left}></div>

                        <div className={inner}>
                            <div className="ms-font-xl">
                                <div>
                                    <p>Yo, world. This stuff is hidden for now. (12/1/16)</p>
                                </div>
                            </div>
                        </div>

                        <div className={right}></div>
                    </div>
                );
                // eslint-disable-next-line
                break;

            default:
                return <div><p>No content</p></div>;
        } // end switch
    }

    _onShowMenuClicked() {
        console.log('_onShowMenuClicked called');
        this.setState({
            isCalloutVisible: !this.state.isCalloutVisible
        });
    }

    _onCalloutDismiss() {
        console.log('_onCalloutDismiss called');
        this.setState({
            isCalloutVisible: false
        });
    }
}

module.exports = { 
    Heading, 
    HorizontalBar, 
    Topping, 
    Page
};