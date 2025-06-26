import React from "react";
import "../styles/Header.css";
import "../../images/iteration-1-images/logo.svg";
import logo from "../../images/iteration-1-images/logo.svg";

const Header = () => {
    return (
        <header className="header-section">
            <div className="header-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
        </header>
    );
};

export default Header;
            