import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

function CostItem(props) {
  return (
    <div>
      <Card className="cost-item">
        <CostDate date={props.data.date} />
        <div className="cost-item__description">
          <h2>{props.data.name}</h2>
          <div className="cost-item__price">${props.data.amount}</div>
        </div>
      </Card>
    </div>
  );
}
export default CostItem;
// .toISOString().slice(0, 10)
