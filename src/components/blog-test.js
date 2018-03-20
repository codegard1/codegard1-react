import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';

import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const API = "https://api.graphcms.com/simple/v1/cjeyxohwk2djw0113vl4xr99p";

const client = new ApolloClient({
    link: new HttpLink({uri: API}),
    cache: new InMemoryCache();
});

const Landing = ({
    data: {
        loading,
        allPosts
    }
}) => {
    if (!loading) {
        return (
            <ApolloProvider client={client}>
                <div className="wrapper">
                    {allPosts.map(post => (
                        <article className="content" key={post.id}>
                            <h2>{post.title}</h2>
                            <p
                                dangerouslySetInnerHTML={{
                                __html: post.description
                            }}/>
                            <Link to={`/post/${post.slug}`}>
                                <button className="btn">Read More</button>
                            </Link>
                        </article>
                    ))}
                </div>
            </ApolloProvider>
        );
    }
    return <h2>Loading Posts...</h2>
};
const allPosts = gql `
 query allPosts {
  allPosts {
   id
   title
   description
   slug
  }
}
`;
export default graphql(allPosts)(Landing);