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
/*
import React from 'react';
import './Expenseitem.css';

function Expenseitem(props) {
  const month = props.date.toLocaleString("en-US", { month: 'long' });
  const day = props.date.toLocaleString("en-US", { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-item'>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      <div className='expense-item_description'>
        <h2>{props.title}</h2>
        <div className='expense-item_location'>{props.locationOfExpenditure}</div>
        <div className='expense-item_price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default Expenseitem;
*/

// src/components/Expenseitem.js
import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './Expenseitem.css';

function Expenseitem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item_description'>
        <h2>{props.title}</h2>
        <ExpenseDetails
          title={props.title}
          amount={props.amount}
          locationOfExpenditure={props.locationOfExpenditure}
        />
      </div>
    </div>
  );
}

export default Expenseitem;
