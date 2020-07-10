import React from "react";
import PropTypes from "prop-types";
import { Tags } from "@tryghost/helpers-gatsby";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`;
    const readingTime = readingTimeHelper(post);

    return (
        <div>
            {/* {<div>{console.log(post)}</div>} */}
            <strong className="d-inline-block mb-2 text-primary">
                {post.tags && (
                    <div className="post-card-tags">
                        {post.tags.map((item, i) => (
                            <span key={i}>
                                <a href={"/tag/" + item.name.toLowerCase()}>
                                    {"#"}
                                    {item.name.toLowerCase()}
                                    {"  "}
                                </a>
                            </span>
                        ))}
                        {/* {post.tags && (
                            <div className="post-card-tags">
                                <Tags
                                    post={post}
                                    visibility="public"
                                    autolink={false}
                                />
                            </div>
                        )} */}
                    </div>
                )}
            </strong>
            <div className="row post-item no-gutters border rounded overflow-hidden flex-md-row mb-4 ml-1 mr-1 h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-1">{post.title}</h3>
                    <div className="post-card-footer-right">
                        <div className="mb-2 text-muted">
                            {"Published on "}
                            {post.published_at_pretty}{" "}
                            <p className="lead">
                                <span className="badge badge-secondary">
                                    {readingTime}
                                </span>
                            </p>
                        </div>
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
                            alt={post.slug}
                        />
                    )}
                </div>
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
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
};

export default PostCard;
