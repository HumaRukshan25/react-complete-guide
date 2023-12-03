// App.js
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/Expense/ExpenseForm';
import NewExpense from './components/Expense/NewExpense';
// ... rest of the imports

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log('In App.js');
    console.log(expenses); // This will log the previous state, not the updated state

    // Update expenses state by adding the new expense
    setExpenses((prevExpenses) => {
      return [...prevExpenses, enteredExpenseData];
    });

    // After updating the state, you can log the updated state if needed
    console.log('Updated Expenses:', expenses);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
