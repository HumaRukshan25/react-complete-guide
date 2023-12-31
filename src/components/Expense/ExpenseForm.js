import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: event.target.value,
    }));
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredAmount: event.target.value,
    }));
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredDate: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });

    setFormVisible(false); // Hide the form after submitting
  };

  const toggleFormVisibility = () => {
    setFormVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <button onClick={toggleFormVisibility}>Add New Expense</button>

      {formVisible && (
        <form onSubmit={submitHandler}>
          <div>
            <label>Title</label>
            <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
          </div>
          <div>
            <label>Amount</label>
            <input type="number" value={userInput.enteredAmount} onChange={amountChangeHandler} />
          </div>
          <div>
            <label>Date</label>
            <input type="date" value={userInput.enteredDate} onChange={dateChangeHandler} />
          </div>
          <button type="submit">Add Expense</button>
          <button type="button" onClick={toggleFormVisibility}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
