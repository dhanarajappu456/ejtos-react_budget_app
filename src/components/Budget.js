import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const upperLimitValue = 20000;
const Budget = () => {
  //   const { expenses, Location } = useContext(AppContext);
  //   const totalExpenses = expenses.reduce((total, item) => {
  //     return (total += item.unitprice * item.quantity);
  //   }, 0);

  const { budget, currency, dispatch, expenses, remaining } =
    useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  console.log("hey", budget, currency, dispatch, expenses, remaining);

  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
    console.log(e.key);
    if (e.key === "Enter" && newBudget <= upperLimitValue) {
      dispatch({ type: "SET_BUDGET", payload: newBudget });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newBudget <= upperLimitValue) {
      dispatch({ type: "SET_BUDGET", payload: newBudget });
    } else if (newBudget > upperLimitValue) {
      alert("The value cannot exceed remaining funds  £" + remaining);
    }
  };

  return (
    <div className="alert alert-secondary ">
      <label>Budget: {currency}</label>
      <input
        className="w-50 ms-1"
        required
        type="number"
        id="cost"
        step={10}
        value={newBudget}
        onChange={handleBudgetChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Budget;
