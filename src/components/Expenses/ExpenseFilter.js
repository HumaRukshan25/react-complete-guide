// ExpenseFilter.js
import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expense-filter">
      <label>Filter by Year</label>
      <select value={props.selectedYear} onChange={filterChangeHandler}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default ExpenseFilter;
