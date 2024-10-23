import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";

function Costs(props) {
  const [year, setYear] = useState("2021");

  const changeYearHandler = (year) => {
    setYear(year);
  };

  return (
    <Card className="costs">
      <CostsFilter onChangeYear={changeYearHandler} year={year} />
      {props.costs.map((item, i) => {
        return <CostItem data={item} key={i} />;
      })}
    </Card>
  );
}

export default Costs;
