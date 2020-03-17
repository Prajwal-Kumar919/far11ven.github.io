import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DiscussionEmbed } from "disqus-react";
import { Layout } from "../components/common";
import { MetaData } from "../components/common/meta";

import Favicon from "../../static/favicon.ico";

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ title, data, location }) => {
    const post = data.ghostPost;
    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME || "www-kushalbhalaik-xyz",
        config: { identifier: post.slug, title }
    };

    return (
        <>
            {/* <div>{console.log(data)}</div> */}
            <MetaData data={data} location={location} type="article" />
            <Helmet>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={Favicon}
                ></link>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        {post.feature_image ? (
                            <figure className="post-feature-image">
                                <img
                                    src={post.feature_image}
                                    alt={post.title}
                                />
                            </figure>
                        ) : null}
                        <section className="post-full-content">
                            <h1 className="content-title">{post.title}</h1>
                            <p className="text-muted">
                                {post.created_at_pretty}
                            </p>
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                    </article>
                    {/* //for disqus_thread */}
                    <div id="disqus_thread">
                        <DiscussionEmbed {...disqusConfig} />
                    </div>
                </div>
            </Layout>
        </>
    );
};

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string
        }).isRequired
    }).isRequired,
    location: PropTypes.object.isRequired
};

export default Post;

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`;
