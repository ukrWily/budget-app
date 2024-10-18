import { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <form action="">
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label htmlFor="cost">Cost</label>
          <input
            id="cost"
            type="number"
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min={2024 - 10 - 18}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit"> Add Flow</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
