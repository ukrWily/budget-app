import { useState } from "react";
import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostsDiagram from "./CostsDiagram";

function Costs(props) {
  const [year, setYear] = useState("2021");

  const changeYearHandler = (year) => {
    setYear(year);
  };

  const filteredCosts = props.costs.filter(
    (item) => new Date(item.date).getFullYear() === +year
  );

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={changeYearHandler} year={year} />
        <CostsDiagram costs={filteredCosts} />
        {filteredCosts.length === 0 && <h2 className="not-found">Not Found</h2>}
        {filteredCosts.map((item, i) => {
          return <CostItem data={item} key={i} />;
        })}
      </Card>
    </div>
  );
}

export default Costs;
