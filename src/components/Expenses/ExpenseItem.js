import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [expenseAmount, setExpenseAmount] = useState(props.amount);

  const clickHandler = () => {
    console.log('Clicked!!!!');
  };

  const deleteExpenseHandler = () => {
    // Perform any additional cleanup or action before deletion if needed
    // For now, just mark it as deleted
    setIsDeleted(true);
  };

  const changeExpenseAmountHandler = () => {
    setExpenseAmount(100);
  };

  return (
    <Card className={`expense-item ${isDeleted ? 'deleted' : ''}`}>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
      {!isDeleted && (
        <div>
          <button onClick={clickHandler}>Click Me</button>
          <button onClick={deleteExpenseHandler}>Delete Expense</button>
          <button onClick={changeExpenseAmountHandler}>Change Expense to $100</button>
        </div>
      )}
    </Card>
  );
}

export default ExpenseItem;
