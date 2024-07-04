import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleInput = (input) => {
    setInput(input.target.value);
  };

  const handleAmount = (amount) => {
    setAmount(amount.target.value);
  };

  const addExpense = () => {
    if (!input || !amount) {
      return;
    }

    const newExpenses = {
      id: expenses.length + 1,
      title: input,
      amount: amount,
    };

    setExpenses([...expenses, newExpenses]);
    setInput("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expenses) => expenses.id !== id));
  };

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <div>
        <input
          type="text"
          placeholder="Expense description"
          className="description"
          onChange={handleInput}
          value={input}
        />
        <input
          onChange={handleAmount}
          placeholder="Amount"
          value={amount}
          type="number"
          className="amount"
          min="0"
        />
        <button onClick={addExpense} className="add-expense">
          Add Expense
        </button>
      </div>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.title}</span>
            <span>${expense.amount}</span>

            <button
              className="delete-button"
              onClick={() => deleteExpense(expense.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
