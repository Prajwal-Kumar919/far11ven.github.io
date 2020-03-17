import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";

const NotFoundPage = () => (
    <Layout>
        <div className="jumbotron bg-transparent text-center main">
            <div className="row no-gutters">
                <div className="jumbotron jumbotron-fluid bg-transparent">
                    <div className="container col-md-12">
                        <img
                            src="https://www.kushalbhalaik.xyz/assets/404.jpg"
                            className=" col-md-8"
                            alt="That's a 404!!"
                        />
                        <p className="lead">
                            <a
                                className="btn btn-default back-to-home"
                                href="/"
                                role="button"
                            >
                                Take me home <i className="fas fa-paw"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default NotFoundPage;
