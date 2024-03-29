import React from 'react';
import { CheckAmount } from './Data';

function AddExpense(props) {
  function AddExpensePrompt() {
    let amount = document.getElementById('amount').value;
    let category = document.getElementById('category').value;

    if (CheckAmount(amount) && parseInt(amount) <= props.totalAmount) {
      //               TotalExpense
      props.setExpenseAmount((prevAmount) => prevAmount + parseInt(amount));

      //                   Category Check
      if (category === 'Automobile') {
        props.setAutomobile([...props.Automobile, amount]);
      } else if (category === 'Entertainment') {
        props.setEntertainment([...props.Entertainment, amount]);
      } else if (category === 'Food') {
        props.setFood([...props.Food, amount]);
      } else if (category === 'Health Care') {
        props.setHealth([...props.HealthCare, amount]);
      } else if (category === 'Utilities') {
        props.setUtility([...props.Utilities, amount]);
      } else if (category === 'Personal') {
        props.setPersonal([...props.Personal, amount]);
      } else if (category === 'Travel') {
        props.setTravel([...props.Travel, amount]);
      }
      ///////////////////////////////////////////////
      props.setC(parseInt(0));
      alert('Expense Added Successfully');
      props.setAmount((prevAmount) => prevAmount - parseInt(amount));
    } else {
      alert('Amount Exceeds Balance or Amount is Invalid');
    }
  }

  return (
    <div className="expense">
      <div className="expenseContainer">
        <input
          type="Number"
          className="income-button"
          id="amount"
          placeholder="Enter Amount"
          required
        ></input>
        <select required id="category">
          <option value="Automobile">Automobile</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Health Care">Health Care</option>
          <option value="Personal">Personal</option>
          <option value="Travel">Travel</option>
          <option value="Utilities">Utilities</option>
        </select>
      </div>
      <button className="submit" onClick={() => AddExpensePrompt()}>
        Submit
      </button>
    </div>
  );
}

export default AddExpense;
