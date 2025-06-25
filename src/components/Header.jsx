import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header-section">
            <div className="header-container">
                <h1 className="header-title">Teknolojik Yemekler</h1>
                <p className="header-subtitle">
                    <span>Anasayfa</span> - <strong>Sipariş Oluştur</strong>
                </p>
            </div>
        </header>
    );
};

export default Header;
            