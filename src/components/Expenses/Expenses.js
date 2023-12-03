// Expenses.js
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
// Import necessary components
import Chart from '../Chart/Chart'; // Adjust the path accordingly
import ChartBar from '../Chart/ChartBar'; // Adjust the path accordingly

// Rest of the code...



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

      {/* Render your expenses list */}
      {filteredExpenses.length === 0 ? (
        <p>No expenses found for the selected year.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <div key={expense.id}>
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
          </div>
        ))
      )}

      {/* Render the Chart component with dataPoints */}
      <Chart dataPoints={filteredExpenses.map((expense) => ({ label: expense.title, value: expense.amount }))} />

      {/* Render a placeholder ChartBar for demonstration purposes */}
      <ChartBar key="placeholder" value={50} maxValue={100} label="Placeholder" />
    </Card>
  );
};

export default Expenses;
