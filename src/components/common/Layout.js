import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";

import Favicon from "../../../static/favicon.ico";

import { Navigation } from ".";
import config from "../../utils/siteConfig";

// Styles
import "../../styles/app.css";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node;

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={Favicon}
                ></link>
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">
                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <a className="navbar-brand" href="/">
                            kushalbhalaik.xyz
                        </a>
                        <button
                            className="navbar-toggler collapsed position-relative"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span> </span>
                            <span> </span>
                            <span> </span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item header active-nav-item">
                                    <a className="nav-link" href="/">
                                        {" "}
                                        blog{" "}
                                    </a>
                                </li>
                                <li className="nav-item header">
                                    <a
                                        className="nav-link"
                                        href="https://kushalbhalaik.xyz/my-work.html"
                                    >
                                        {" "}
                                        my work{" "}
                                    </a>
                                </li>
                                <li className="nav-item header">
                                    <a
                                        className="nav-link"
                                        href="https://kushalbhalaik.xyz/contact.html"
                                    >
                                        {" "}
                                        contact me{" "}
                                    </a>
                                </li>
                                <li className="nav-item header">
                                    <a
                                        className="nav-link"
                                        href="https://kushalbhalaik.xyz/"
                                    >
                                        {" "}
                                        about me{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>
                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    {/* <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © 2019 &mdash;
                                Published with{" "}
                                <a
                                    className="site-foot-nav-item"
                                    href="https://ghost.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ghost
                                </a>
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation
                                    data={site.navigation}
                                    navclassName="site-foot-nav-item"
                                />
                            </div>
                        </div>
                    </footer> */}
                    <footer className="footer mt-auto p-3">
                        <span className="text-muted">
                            © 2019-20 Kushal Bhalaik
                        </span>
                    </footer>
                </div>
            </div>
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        allGhostSettings: PropTypes.object.isRequired
    }).isRequired
};

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: { eq: "ghost-icon.png" }) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;
