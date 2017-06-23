import React, { Component } from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

export class Projects extends Component {
    render() {

        return (
            <div className="ms-font-xl">
                <p>
                    Here is a sampling of what I'm doing now:</p>
                <ul>
                    <li>Building <Link href="https://github.com/codegard1/blackjack/">my own version of blackjack</Link> using React, Fabric, Masonry, and <Link href="https://github.com/troygoode/node-shuffle">node-shuffle</Link></li>
                    <li>Working with Gatekeepers and business owners to migrate sites and content from an older site collection (SP 2013) to the new one (SP 2016)</li>
                    <li>Getting used to the <Link href="https://github.com/petehunt/react-howto">React ecosystem</Link>, with the intention
                                of using the framework to create modular forms within SharePoint pages, obviating some of our dependence on
                                <Link href="http://www.nintex.com/">Nintex Forms</Link></li>
                    <li>Adding <Link href="http://etymonline.com/index.php?allowed_in_frame=0&search=pizzazz">pizzazz</Link> to this site</li>
                </ul>
            </div>
        );
    }
}