import "./Costs.css";
import CostItem from "./CostItem";
import Card from "./Card";

function Costs(props) {
  console.log(props);

  return (
    <Card className="costs">
      {props.data.map((item, i) => {
        return <CostItem data={item} key={i} />;
      })}
    </Card>
  );
}

export default Costs;
