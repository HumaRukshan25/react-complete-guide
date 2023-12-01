import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const clickHandler = () => {
    console.log('Clicked!!!!');
  };

  const deleteExpenseHandler = () => {
    // Perform any additional cleanup or action before deletion if needed
    // For now, just mark it as deleted
    setIsDeleted(true);
  };

  return (
    <Card className={`expense-item ${isDeleted ? 'deleted' : ''}`}>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {!isDeleted && (
        <div>
          <button onClick={clickHandler}>Click Me</button>
          <button onClick={deleteExpenseHandler}>Delete Expense</button>
        </div>
      )}
    </Card>
  );
}

export default ExpenseItem;
