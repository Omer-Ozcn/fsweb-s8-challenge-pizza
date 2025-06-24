import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const history = useHistory();

  const handleOrderClick = () => {
    history.push("/Order");
  };
  return (
    <>
      <section className="home-section">
          <div className="home-container">
            <h1 className="home-title">Teknolojik Yemekler</h1>
            <h2 className="home-slogan">
              KOD ACIKTIRIR <br /> PİZZA, DOYURUR
            </h2>
            <button className="order-button" onClick={handleOrderClick}>
              ACIKTIM
            </button>
          </div>
      </section>
    </>
  );
};

export default Home;