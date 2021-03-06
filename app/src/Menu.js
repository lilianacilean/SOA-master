import React from "react";
import logout from "./token/logout";

const Menu = () => (
    <header className="sticky">
        <a href="#/" className="logo">Questions &amp; Answers</a>
        <button onClick={logout} className="button" style={{float: "right"}}><span className="icon-lock"></span></button>
        <a href="#/preferences" className="button" style={{float: "right"}}><span className="icon-settings"></span></a>
    </header>
);

export default Menu;