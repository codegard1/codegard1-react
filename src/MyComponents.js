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
                <div className="ms-Grid-col ms-u-sm12">&nbsp;</div>
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

        this._onShowMenuClicked = this._onShowMenuClicked.bind(this);
        this._onCalloutDismiss = this._onCalloutDismiss.bind(this);

        this.state = {
            isCalloutVisible: false
        };
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
                        <div className={left}>&nbsp;</div>

                        <div className={inner}>
                            
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
                    <Topping title="Identity" icon="contact" />
                        <div className={left}>&nbsp;</div>

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

                        <div className={right}>&nbsp;</div>
                    </div> /* end ms-Grid-row */
                );
                // eslint-disable-next-line
                break;

            case 'projects':
                return (
                    <div className="ms-Grid-row">
                        <Topping title="Current Projects" icon="heartEmpty" />
                        <div className={left}>&nbsp;</div>

                        <div className={inner}>
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

            case 'experimental':
                
                return (
                    <div className="ms-u-slideRightIn40 ms-Grid-row">
                    <Topping title="Experimental" icon="circle" />
                        <div className={left}>&nbsp;</div>

                        <div className={inner}>
                            <div className="ms-font-xl">
                                <div>
                                    <p>isCalloutVisible? : {JSON.stringify(isCalloutVisible)}</p>
                                    <Button 
                                        name="menuButton"
                                        onClick={this._onShowMenuClicked}
                                        >
                                        { isCalloutVisible ? 'Hide Callout' : 'Show Callout' }
                                    </Button>
                                </div>

                                { isCalloutVisible && (
                                <Callout
                                    gapSpace={ 0 }
                                    targetElement={this._menuButtonElement}
                                    onDismiss={this._onCalloutDismiss}
                                    setInitialFocus={false}
                                    >
                                    <div className='ms-CalloutExample-header'>
                                        <p className='ms-CalloutExample-title'>
                                            Callout title
                                        </p>
                                    </div>
                                    <div className='ms-CalloutExample-inner'>
                                        <div className='ms-CalloutExample-content'>
                                            <p className='ms-CalloutExample-subText'>
                                            Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.
                                            </p>
                                        </div>
                                        <div className='ms-CalloutExample-actions'>
                                            <Link className='ms-CalloutExample-link' href='http://microsoft.com'>Go to microsoft</Link>
                                        </div>
                                    </div>
                                </Callout>
                                ) }
                            </div>
                        </div>

                        <div className={right}>&nbsp;</div>
                    </div>
                );
            // eslint-disable-next-line
            break;


            default:
                return <div>No content</div>;
        } // end switch
    }

    _onShowMenuClicked() {
        this.setState({
            isCalloutVisible: !this.state.isCalloutVisible
        });
    }

    _onCalloutDismiss() {
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