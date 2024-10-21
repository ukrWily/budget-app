import { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  // 1 way
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

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

  const submitHandler = (e) => {
    e.preventDefault();

    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={inputName}
            onChange={(e) => inputChangeHandler(e, setInputName)}
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min={0.01}
            step={0.01}
            value={inputAmount}
            onChange={(e) => inputChangeHandler(e, setInputAmount)}
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min={2024 - 10 - 18}
            value={inputDate}
            onChange={(e) => inputChangeHandler(e, setInputDate)}
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
