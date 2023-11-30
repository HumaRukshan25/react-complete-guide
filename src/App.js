
import React from 'react';
import ExpenseItem from './components/Expenseitem';
import ExpenseDetails from './components/ExpenseDetails';
import ExpenseDate from './components/ExpenseDate';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), locationOfExpenditure: 'Gas Station' },
    { title: 'Groceries', amount: 50.25, date: new Date(2021, 3, 15), locationOfExpenditure: 'Supermarket' },
    { title: 'Dinner Out', amount: 80.50, date: new Date(2021, 3, 20), locationOfExpenditure: 'Restaurant' },
    { title: 'Internet Bill', amount: 60.00, date: new Date(2021, 4, 1), locationOfExpenditure: 'Online Service Provider' },
    // Add more expense objects as needed
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* Loop through expenses and render ExpenseItem for each */}
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}  // Make sure to provide a unique key for each item in the list
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          locationOfExpenditure={expense.locationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App;