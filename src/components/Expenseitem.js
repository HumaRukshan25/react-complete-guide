/*
// Expenseitem.js
import React from 'react';
import './Expenseitem.css';
function Expenseitem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  const locationOfExpenditure = 'Gas Station'; // Add your location variable here
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item_description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item_location'>{locationOfExpenditure}</div>
        <div className='expense-item_price'>${expenseAmount}</div>
      </div>
    </div>
  );
}
export default Expenseitem;
*/
import React from 'react';
import './Expenseitem.css';

function Expenseitem(props) {
  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item_description'>
        <h2>{props.title}</h2>
        <div className='expense-item_location'>{props.locationOfExpenditure}</div>
        <div className='expense-item_price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default Expenseitem;


