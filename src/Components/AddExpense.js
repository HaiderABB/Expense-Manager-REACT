import React from 'react';

function AddExpense() {
  return (
    <div class="expense">
      <div className="expenseContainer">
        <input type="Number" className="income-button"></input>
        <select>
          <option>Automobile</option>
          <option>Entertainment</option>
          <option>Food</option>
          <option>Health Care</option>
          <option>Personal</option>
          <option>Travel</option>
          <option>Utilities</option>
        </select>
      </div>
      <button className="submit">Submit</button>
    </div>
  );
}

export default AddExpense;
