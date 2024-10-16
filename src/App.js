import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      date: new Date(2024, 9, 14),
      description: "Refrigerator",
      amount: 999.99,
    },
    {
      date: new Date(2024, 7, 14),
      description: "Cooler",
      amount: 99.99,
    },
    {
      date: new Date(2024, 5, 14),
      description: "Phone",
      amount: 399.99,
    },
  ];

  return (
    <div>
      <NewCost />
      <Costs data={costs} />
    </div>
  );
}

export default App;
