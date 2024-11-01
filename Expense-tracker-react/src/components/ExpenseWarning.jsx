import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseWarning = () => {
  const { transactions } = useContext(GlobalContext);
  const [limit, setLimit] = useState(30000); // Default monthly limit
  const [isWarning, setIsWarning] = useState(false);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    // Calculate total expenses
    const expenses = transactions
      .filter(transaction => transaction.amount < 0)
      .reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0);

    console.log("Calculated total expenses:", expenses); // Debugging log
    setTotalExpenses(expenses);

    // Check if total expenses reach 80% of the limit
    if (expenses >= limit * 0.8) {
      setIsWarning(true);
      console.log("Warning triggered!"); // Debugging log
    } else {
      setIsWarning(false);
      console.log("No warning needed."); // Debugging log
    }
  }, [transactions, limit]);

  const handleLimitChange = (e) => {
    const newLimit = Number(e.target.value);
    console.log("New limit set:", newLimit); // Debugging log
    setLimit(newLimit);
  };

  return (
    <div>
      <div className="form-control">
        <label>Set Monthly Expense Limit</label>
        <input
          type="number"
          value={limit}
          onChange={handleLimitChange}
          placeholder="Enter monthly limit..."
        />
      </div>
      
      {isWarning && (
        <p style={{ color: totalExpenses > limit ? "red" : "orange" }}>
          {totalExpenses > limit
            ? "Warning: You have exceeded your monthly limit!"
            : "Alert: You are nearing your monthly expense limit!"}
        </p>
      )}
    </div>
  );
};

export default ExpenseWarning;
