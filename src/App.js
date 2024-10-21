import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      id: "c1",
      date: new Date(2024, 9, 14),
      description: "Refrigerator",
      amount: 999.99,
    },
    {
      id: "c2",
      date: new Date(2024, 7, 14),
      description: "Cooler",
      amount: 99.99,
    },
    {
      id: "c3",
      date: new Date(2024, 5, 14),
      description: "Phone",
      amount: 399.99,
    },
  ];

  const addCostHandler = () => {};

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs data={costs} />
    </div>
  );
}

export default App;
