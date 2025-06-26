import React from "react";
import Footer from "../components/Footer";
import "../styles/Success.css";
import "../../images/iteration-1-images/logo.svg";
import logoSuccess from "../../images/iteration-1-images/logo.svg";

const Success = ({ orderData }) => {
  if (!orderData) {
    return (
      <div className="success-section">
        <h2 className="success-title">Sipariş Bilgisi Bulunamadı</h2>
      </div>
    );
  }

  return (
    <>
      <div className="success-section">
        <img src={logoSuccess} alt="Teknolojik Yemekler Logo" className="success-logo-img" />
        <div className="success-title">
          <span className="success-lezzet">Lezzetin Yolda</span>
          <br />
          <span className="success-okey">SİPARİŞ ALINDI</span>
        </div>
        <div className="success-message">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="success-details">
            <p><b className="same-typography">Boyut:</b> {orderData.boyut}</p>
            <p><b className="same-typography">Hamur:</b> <span>{orderData.hamur}</span></p>
            <p>
              <b className="same-typography">Ek Malzemeler:</b>{" "}
              <span>
                {orderData.malzemeler && orderData.malzemeler.join(", ")}
              </span>
            </p>
          </div>
          <div className="success-total-box">
            <div className="success-total-title">Sipariş Toplamı</div>
            <div className="success-total-row">
              <span>Seçimler</span>
              <span>25.00₺</span>
            </div>
            <div className="success-total-row">
              <span>Toplam</span>
              <span>110.50₺</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;