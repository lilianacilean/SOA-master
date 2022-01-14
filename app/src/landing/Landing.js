import React from "react";
//import logo from '../logo.svg';
import logo from '../qa_logo.jpg';

import "./Landing.scss";

const Landing = () => (
    <div className="landing-page">
        <div className="call-to-action-outer">
            <div>
                <div className="call-to-action">
                    <img src={logo} alt="logo" className="logo" />
                    <h1>Questions &amp; Answers</h1>
                    <h3><em><small>It is better to debate a question without settling it than to settling a question without debating it.</small></em></h3>
                    <a href="#/register" className="button inverse">Register</a>
                    <a href="#/login" className="login-button button">Login</a>
                </div>
            </div>
        </div>

    </div>
);

export default Landing;