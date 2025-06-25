import React from "react";
import "../styles/ExtraIngredients.css";

const ExtraingredientsList = [
  "Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas",
  "Sosis", "Soğan", "Sucuk", "Biber", "Kabak",
  "Kanada Jambonu", "Domates", "Jalepeno"
];

const ExtraIngredients = ({ selected, setSelected, error }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else if (selected.length < 10) {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="extra-ingredients">
      <h3>Ek Malzemeler</h3>
      <p>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</p>
      <div className="ingredients-list">
        {ExtraingredientsList.map((item, i) => (
          <label key={i}>
            <input
              type="checkbox"
              value={item}
              checked={selected.includes(item)}
              onChange={handleChange}
              disabled={!selected.includes(item) && selected.length >= 10}
            />
            {item}
          </label>
        ))}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default ExtraIngredients;