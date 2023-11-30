// src/components/ExpenseDetails.js
import React from 'react';
import './ExpenseDetails.css';

function ExpenseDetails(props) {
  return (
    <div className='expense-details'>
      <h2>{props.title}</h2>
      <div className='expense-details_location'>{props.locationOfExpenditure}</div>
      <div className='expense-details_amount'>${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
