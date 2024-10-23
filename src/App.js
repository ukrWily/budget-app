import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2024, 9, 14),
    name: "Refrigerator",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2024, 7, 14),
    name: "Cooler",
    amount: 99.99,
  },
  {
    id: "c3",
    date: new Date(2024, 5, 14),
    name: "Phone",
    amount: 399.99,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [...prevCosts, cost];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
