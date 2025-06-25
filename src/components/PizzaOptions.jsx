import React from "react";
import "../styles/PizzaOptions.css";

const PizzaOptions = ({ size, setSize, dough, setDough, errors }) => {
  return (
    <div className="pizza-options">
      <div className="option-group">
        <label className="option-title">
          Boyut Seç <span className="required">*</span>
        </label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="size"
              value="Küçük"
              checked={size === "Küçük"}
              onChange={e => setSize(e.target.value)}
            /> Küçük
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="Orta"
              checked={size === "Orta"}
              onChange={e => setSize(e.target.value)}
            /> Orta
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="Büyük"
              checked={size === "Büyük"}
              onChange={e => setSize(e.target.value)}
            /> Büyük
          </label>
        </div>
        {errors?.size && <p className="error">{errors.size}</p>}
      </div>

      <div className="option-group">
        <label className="option-title">
          Hamur Seç <span className="required">*</span>
        </label>
        <select value={dough} onChange={e => setDough(e.target.value)}>
          <option value="">Hamur Kalınlığı</option>
          <option value="İnce">İnce</option>
          <option value="Normal">Normal</option>
          <option value="Kalın">Kalın</option>
        </select>
        {errors?.dough && <p className="error">{errors.dough}</p>}
      </div>
    </div>
  );
};

export default PizzaOptions;