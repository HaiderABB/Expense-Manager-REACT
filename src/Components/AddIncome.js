import React from 'react';
import { CheckAmount } from './Data';

function AddIncome(props) {
  const AddIncomePrompt = () => {
    let amount = document.getElementById('income-button').value;
    if (CheckAmount(parseInt(amount))) {
      props.setIncome((prevAmount) => prevAmount + parseInt(amount));
    }
  };

  return (
    <div className="AddIncome">
      <div className="incomeContainer">
        <input
          type="Number"
          className="income-button"
          id="income-button"
          placeholder="Enter Amount"
          required
        ></input>
      </div>
      <button className="submit" onClick={() => AddIncomePrompt()}>
        Submit
      </button>
    </div>
  );
}

export default AddIncome;
