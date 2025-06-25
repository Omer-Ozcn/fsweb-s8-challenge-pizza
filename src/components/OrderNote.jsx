import React from "react";
import "../styles/OrderNote.css";

const OrderNote = ({ note, setNote }) => {
  return (
    <div className="order-note-container">
      <h3 className="order-note-title">Sipariş Notu</h3>
      <textarea
        className="order-note-textarea"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        value={note}
        onChange={e => setNote(e.target.value)}
        rows={3}
      />
    </div>
  );
};

export default OrderNote;