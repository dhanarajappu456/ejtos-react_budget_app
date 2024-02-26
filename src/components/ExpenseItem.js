import React, { useContext } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
const ExpenseItem = (props) => {
  const { currency, dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency} {props.cost}
      </td>
      <td>
        <FaPlusCircle
          size="1.5em"
          color="green"
          onClick={(event) => increaseAllocation(props.name)}
        />
      </td>
      <td>
        <FaMinusCircle
          size="1.5em"
          color="red"
          onClick={(event) => decreaseAllocation(props.name)}
        />
      </td>
      <td>
        <td>
          <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
        </td>
      </td>
    </tr>
  );
};

export default ExpenseItem;
