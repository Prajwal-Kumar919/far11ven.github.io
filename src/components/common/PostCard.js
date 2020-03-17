import React from "react";
import PropTypes from "prop-types";
import { Tags } from "@tryghost/helpers-gatsby";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`;
    const readingTime = readingTimeHelper(post);

    return (
        <div className="row post-item no-gutters border rounded overflow-hidden flex-md-row mb-4 ml-1 mr-1 h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                    {post.tags && (
                        <div className="post-card-tags">
                            <Tags
                                post={post}
                                visibility="public"
                                autolink={false}
                            />
                        </div>
                    )}
                </strong>
                <h3 className="mb-1">{post.title}</h3>
                <div className="post-card-footer-right">
                    <div className="mb-2 text-muted">{readingTime}</div>
                </div>
                <div className="mb-1 text-muted">
                    {/* The main post date
                            <time className="post-date text-muted">
                                {post.created_at_pretty}
                            </time> */}
                </div>
                <p className="card-text mb-auto">{post.excerpt}...</p>
                <a href={url} className="stretched-link">
                    Read
                </a>

                {post.featured && <span>Featured</span>}
            </div>
            <div className="col-auto d-none d-lg-block p-4">
                {post.feature_image && (
                    <img
                        className="bd-placeholder-img"
                        width="200"
                        height="250"
                        src={post.feature_image}
                        alt="Bootstrap Icons - Overview"
                    />
                )}
            </div>
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string
        }).isRequired
    }).isRequired
};

export default PostCard;
