import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../../images/iteration-1-images/logo.svg";
import logoHeader from "../../images/iteration-1-images/logo.svg";

const Home = () => {
  const history = useHistory();
  const handleOrderClick = () => {
    history.push("/Order");
  };

  return (
    <>
      <section className="home-section">
        <div className="home-container">
          <img src={logoHeader} alt="Teknolojik Yemekler Logo" className="header-logo-img" />
          <h1 className="home-title">fırsatı kaçırma</h1>
          <h2 className="home-slogan">
            KOD ACIKTIRIR <br /> PİZZA, DOYURUR
          </h2>
          <button className="home-button" onClick={handleOrderClick}>
            ACIKTIM
          </button>
        </div>
      </section>

      <section className="menu-section">
        <div className="menu-categories top-categories">
          <div className="category-item">
            <img src="images/iteration-2-images/icons/1.svg" alt="YENİ! Kore" />
            <p>YENİ! Kore</p>
          </div>
          <div className="category-item">
            <img src="images/iteration-2-images/icons/2.svg" alt="Pizza" />
            <p>Pizza</p>
          </div>
          <div className="category-item">
            <img src="images/iteration-2-images/icons/3.svg" alt="Burger" />
            <p>Burger</p>
          </div>
          <div className="category-item">
            <img src="images/iteration-2-images/icons/4.svg" alt="Kızartmalar" />
            <p>Kızartmalar</p>
          </div>
          <div className="category-item">
            <img src="images/iteration-2-images/icons/5.svg" alt="Fast food" />
            <p>Fast food</p>
          </div>
          <div className="category-item">
            <img src="images/iteration-2-images/icons/6.svg" alt="Gazlı içecek" />
            <p>Gazlı içecek</p>
          </div>
        </div>

        <div className="special-offers">
          <div
            className="card-overlay"
            style={{
              backgroundImage: `url(images/iteration-2-images/cta/kart-1.png)`,
            }}
          >
            <div className="card-content">
              <h3>Özel Lezzetus</h3>
              <p>Position: Absolute Acı Burger</p>
              <button onClick={handleOrderClick}>SİPARİŞ VER</button>
            </div>
          </div>

          <div className="right-cards">
            <div
              className="card-overlay"
              style={{
                backgroundImage: `url(images/iteration-2-images/cta/kart-2.png)`,
              }}
            >
              <div className="card-content">
                <h3>Hackathlon Burger Menü</h3>
                <button onClick={handleOrderClick}>SİPARİŞ VER</button>
              </div>
            </div>

            <div
              className="card-overlay"
              style={{
                backgroundImage: `url(images/iteration-2-images/cta/kart-3.png)`,
              }}
            >
              <div className="card-content">
                <h3>Çoooook hızlı npm gibi kurye</h3>
                <button onClick={handleOrderClick}>SİPARİŞ VER</button>
              </div>
            </div>
          </div>
        </div>

        <h4 className="section-subtitle">en çok paketlenen menüler</h4>
        <h3 className="section-title">Acıktıran Kodlara Doyuran Lezzetler</h3>

        <div className="menu-categories bottom-categories">
          <div className="category-item">
            <img src="images/iteration-2-images/icons/1.svg" alt="Ramen" />
            <p>Ramen</p>
          </div>
          <div className="category-item selected">
            <img src="images/iteration-2-images/icons/2.svg" alt="Pizza" />
            <p>Pizza</p>
          </div>
          <div className="category-item">
            <img src="images/iteration-2-images/icons/3.svg" alt="Burger" />
            <p>Burger</p>
          </div>
          <div className="category-item">
            <img src="images/iteration-2-images/icons/4.svg" alt="French fries" />
            <p>French fries</p>
          </div>
          <div className="category-item">
            <img src="images/iteration-2-images/icons/5.svg" alt="Fast food" />
            <p>Fast food</p>
          </div>
          <div className="category-item">
            <img src="images/iteration-2-images/icons/6.svg" alt="Soft drinks" />
            <p>Soft drinks</p>
          </div>
        </div>

        <div className="product-list">
          <div className="product-card">
            <img src="images/iteration-2-images/pictures/food-1.png" alt="Pizza" />
            <div className="product-info">
              <p className="product-name">Terminal Pizza</p>
              <p className="product-price">₺85</p>
            </div>
          </div>

          <div className="product-card">
            <img src="images/iteration-2-images/pictures/food-2.png" alt="Pizza" />
            <div className="product-info">
              <p className="product-name">Position Absolute Acılı Pizza</p>
              <p className="product-price">₺95</p>
            </div>
          </div>

          <div className="product-card">
            <img src="images/iteration-2-images/pictures/food-3.png" alt="Burger" />
            <div className="product-info">
              <p className="product-name">useEffect Tavuklu Burger</p>
              <p className="product-price">₺105</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
