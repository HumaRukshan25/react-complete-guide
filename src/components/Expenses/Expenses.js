// Expenses.js
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler} />

      {filteredExpenses.length === 0 ? (
        <p>No expenses found for the selected year.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <div key={expense.id}>
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
          </div>
        ))
      )}

      {filteredExpenses.length === 1 && (
        <p>Only single expense here. Please add more...</p>
      )}
    </Card>
  );
};

export default Expenses;
