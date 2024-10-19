import { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
  // 1 way
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>
  // 2 way
  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  // const inputChangeHandler = (e) => {
  //   const set = e.target.id;
  //   setUserInput((previousState) => {
  //     return {
  //       ...previousState,
  //       [set]: e.target.value,
  //     };
  //   });
  //   console.log(userInput);
  // };
  //<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>

  // 1 way
  const inputChangeHandler = (e, set) => {
    set(e.target.value);
    console.log(name, amount, date);
  };
  // const nameChangeHandler = (e) => {
  //   setName(e.target.value);
  // };
  // const amountChangeHandler = (e) => {
  //   setAmount(e.target.value);
  // };
  // const dateChangeHandler = (e) => {
  //   setDate(e.target.value);
  // };

  return (
    <form action="">
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={(e) => inputChangeHandler(e, setName)}
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min={0.01}
            step={0.01}
            onChange={(e) => inputChangeHandler(e, setAmount)}
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min={2024 - 10 - 18}
            onChange={(e) => inputChangeHandler(e, setDate)}
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
