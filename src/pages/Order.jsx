import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Order.css";
import Header from "../components/Header";
import PizzaOptions from "../components/PizzaOptions";
import ExtraIngredients from "../components/ExtraIngredients";
import OrderNote from "../components/OrderNote";
import QuantitySelector from "../components/QuantitySelector";
import "../../images/iteration-2-images/pictures/form-banner.png";
import Footer from "../components/Footer";
import axios from "axios";
import formBanner from "../../images/iteration-2-images/pictures/form-banner.png";

const Order = ({ setOrderData }) => {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const validateForm = () => {
    const newErrors = {};
    if (!size) newErrors.size = "Pizza boyutu seçmelisiniz.";
    if (!dough) newErrors.dough = "Hamur seçmelisiniz.";
    if (ingredients.length < 4)
      newErrors.ingredients = "En az 4 malzeme seçmelisiniz.";
    if (ingredients.length > 10)
      newErrors.ingredients = "En fazla 10 malzeme seçebilirsiniz.";
    if (quantity < 1) 
      newErrors.quantity = "Adet 1 veya daha fazla olmalı.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (!isSubmitting) return;

    const orderData = {
      boyut: size,
      hamur: dough,
      malzemeler: ingredients,
      not: note,
      adet: quantity,
    };

    axios.post("https://reqres.in/api/users", 
      orderData,
      { headers: { "x-api-key": "reqres-free-v1" } })
      .then(() => {
        setOrderData(orderData);
        console.log("Sipariş Özeti:", orderData);
        setSize("");
        setDough("");
        setIngredients([]);
        setNote("");
        setQuantity(1);
        setErrors({});
        setIsSubmitting(false);
        history.push("/success");
      })
      .catch((err) => {
        alert("Sipariş gönderilemedi: " + err.message);
        setIsSubmitting(false);
      });
  }, [isSubmitting, size, dough, ingredients, note, quantity, setOrderData, history]);

  const isFormValid = useMemo(() => {
    return (
      size &&
      dough &&
      ingredients.length >= 4 &&
      ingredients.length <= 10 &&
      quantity > 0
    );
  }, [size, dough, ingredients, quantity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
    }
  };


  return (
    <>
      <Header />
      <img src={formBanner} alt="Pizza Banner" className="form-banner" />
      <form className="order-container" onSubmit={handleSubmit}>
        <h2>Position Absolute Acı Pizza</h2>
        <div className="price-rating">
          <span className="price">85.50₺</span>
          <span className="rating">4.9 ⭐ (200)</span>
        </div>
        <p className="description">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam
          sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle
          kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek
          sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı
          hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya
          bazen pizzetta denir.
        </p>

        <PizzaOptions
          size={size}
          setSize={setSize}
          dough={dough}
          setDough={setDough}
          errors={{ size: errors.size, dough: errors.dough }}
        />

        <ExtraIngredients
          selected={ingredients}
          setSelected={setIngredients}
          error={errors.ingredients}
        />

        <OrderNote note={note} setNote={setNote} />

        <div className="last-section">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          {errors.quantity && <p className="error">{errors.quantity}</p>}
          <section className="order-summary-box">
            <h1 className="summary-title">Sipariş Toplamı</h1>
            <div className="summary-row">
              <span className="label">Seçimler</span>
              <span className="light-value">25.00₺</span>
            </div>
            <div className="summary-rowb">
              <span className="red-label">Toplam</span>
              <span className="red-value">110.50₺</span>
            </div>
            <div className="order-section">
              <button type="submit" className="order-buton" disabled={!isFormValid}>
                Sipariş Ver
              </button>
            </div>
          </section>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Order;