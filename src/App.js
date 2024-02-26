import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";

//Code to import Budget.js

// Add code to import the other components here under

import AllocationForm from "./components/AllocationForm";
import Currency from "./components/Currency";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
import { AppProvider } from "./context/AppContext";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          {/* Add Budget component here */}   
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <div className="col-sm">
            <Currency />
          </div>
          <h3 className="mt-3">Allocation</h3>
          {/* Add Remaining component here*/}   {" "}
          {/* Add ExpenseTotal component here */}
          <ExpenseList />
          <h3 className="mt-3">ChangeAllocation</h3>
          {/* Add ExpenseList component here */}   {" "}
          {/* Add ExpenseItem component here */}   {" "}
          {/* Add AllocationForm component here under */}
          <AllocationForm />
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
