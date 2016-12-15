import React, { Component } from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Topping } from '../';
import * as fabric from '../fabricStyles';

export class Projects extends Component {
    render () {
        let left = fabric.left;
        let inner = fabric.inner;
        let right = fabric.right;

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
    }
}